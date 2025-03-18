<script setup lang="ts">
import { UseVirtualList } from '@vueuse/components';
import { computed, ref } from 'vue';
import { findIP } from '../utils/find';
import type { Range } from '../utils/types';
interface Props {
    subnets: number;
    hosts: number;
    ranges: Range[];
}
const { subnets, hosts, ranges } = defineProps<Props>();
const subnet = ref(0);
const host = ref(1);
const found = ref(false);
const showSubnet = ref(false);
const showHost = ref(false);
const ip = computed(() => findIP(subnet.value, host.value, ranges));
</script>

<template>
    <span>Find IP of:</span>
    <div class="flex gap-x-2 p-1">
        <span>Subnet:</span>
        <div>
            <button
                class="cursor-pointer rounded-md border-2 w-20"
                @click="showSubnet = !showSubnet"
            >
                {{ subnet }}
            </button>
            <UseVirtualList
                v-if="showSubnet"
                class="w-20 text-center max-h-80 py-0.5 *:flex *:flex-col *:gap-y-0.5"
                :list="Array.from({ length: subnets })"
                :options="{ itemHeight: 30 }"
                height="auto"
            >
                <template #default="props">
                    <div
                        class="w-16 border-2 rounded-md cursor-pointer"
                        @click="
                            found = false;
                            showSubnet = false;
                            subnet = props.index;
                        "
                    >
                        {{ props.index }}
                    </div>
                </template>
            </UseVirtualList>
        </div>
        <span>Host:</span>
        <div>
            <button
                class="cursor-pointer rounded-md border-2 w-20"
                @click="showHost = !showHost"
            >
                {{ host }}
            </button>
            <UseVirtualList
                v-if="showHost"
                class="w-20 text-center max-h-80 py-0.5 *:flex *:flex-col *:gap-y-0.5"
                :list="Array.from({ length: hosts })"
                :options="{ itemHeight: 30 }"
                height="auto"
            >
                <template #default="props">
                    <div
                        class="w-16 border-2 rounded-md cursor-pointer"
                        @click="
                            found = false;
                            showHost = false;
                            host = props.index + 1;
                        "
                    >
                        {{ props.index + 1 }}
                    </div>
                </template>
            </UseVirtualList>
        </div>
    </div>
    <button
        class="cursor-pointer rounded-md border-2 p-1.5"
        @click="found = true"
    >
        Find
    </button>
    <div v-if="found && ip" class="contents">
        <span>The IP of subnet {{ subnet }} and host {{ host }} is:</span>
        <span class="font-bold">{{ ip }}</span>
    </div>
</template>
