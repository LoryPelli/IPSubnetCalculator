<script setup lang="ts">
import { UseVirtualList } from '@vueuse/components';
import { computed, ref } from 'vue';
import { findIP } from '../utils/find';
interface Props {
    startIP: string;
    subnets: number;
    hosts: number;
    networkBits: number;
    subnetBits: number;
}
const { startIP, subnets, hosts, networkBits, subnetBits } =
    defineProps<Props>();
const subnet = ref(0);
const host = ref(1);
const found = ref(false);
const showSubnet = ref(false);
const showHost = ref(false);
const ip = computed(() =>
    findIP(startIP, subnet.value, host.value, networkBits, subnetBits),
);
</script>

<template>
    <span>Find IP of:</span>
    <div class="flex gap-x-2 p-1">
        <span>Subnet:</span>
        <div>
            <button
                class="w-20 cursor-pointer rounded-md border-2"
                @click="showSubnet = !showSubnet"
            >
                {{ subnet }}
            </button>
            <UseVirtualList
                v-if="showSubnet"
                class="max-h-80 w-20 py-0.5 text-center *:flex *:flex-col *:gap-y-0.5"
                :list="Array.from({ length: subnets })"
                :options="{ itemHeight: 30 }"
                height="auto"
            >
                <template #default="props">
                    <div
                        class="w-16 cursor-pointer rounded-md border-2"
                        @click="
                            found = false;
                            showSubnet = false;
                            subnet = props.index;
                        "
                    >
                        <span>{{ props.index }}</span>
                    </div>
                </template>
            </UseVirtualList>
        </div>
        <span>Host:</span>
        <div>
            <button
                class="w-20 cursor-pointer rounded-md border-2"
                @click="showHost = !showHost"
            >
                {{ host }}
            </button>
            <UseVirtualList
                v-if="showHost"
                class="max-h-80 w-20 py-0.5 text-center *:flex *:flex-col *:gap-y-0.5"
                :list="Array.from({ length: hosts })"
                :options="{ itemHeight: 30 }"
                height="auto"
            >
                <template #default="props">
                    <div
                        class="w-16 cursor-pointer rounded-md border-2"
                        @click="
                            found = false;
                            showHost = false;
                            host = props.index + 1;
                        "
                    >
                        <span>{{ props.index + 1 }}</span>
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
    <template v-if="found && ip">
        <span>The IP of subnet {{ subnet }} and host {{ host }} is:</span>
        <span class="font-bold">{{ ip }}</span>
    </template>
</template>
