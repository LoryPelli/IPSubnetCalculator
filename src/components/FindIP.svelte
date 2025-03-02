<script lang="ts">
    import { findIP } from '../utils/find';
    import type { Range } from '../utils/types';
    interface Props {
        subnets: number;
        hosts: number;
        ranges: Range[];
    }
    const { subnets, hosts, ranges }: Props = $props();
    let subnet = $state(0);
    let host = $state(1);
    let found = $state(false);
</script>

<span>Find IP of:</span>
<div class="flex gap-x-2 p-1">
    <span>Subnet:</span>
    <select
        class="w-20 rounded-md border-2 text-center"
        bind:value={subnet}
        onchange={() => (found = false)}
    >
        {#each { length: subnets } as _, i}
            <option>{i}</option>
        {/each}
    </select>
    <span>Host:</span>
    <select
        class="w-20 rounded-md border-2 text-center"
        bind:value={host}
        onchange={() => (found = false)}
    >
        {#each { length: hosts } as _, i}
            <option>{i + 1}</option>
        {/each}
    </select>
</div>
<button
    class="cursor-pointer rounded-md border-2 p-1.5"
    onclick={() => (found = true)}>Find</button
>
{#if found}
    {@const ip = findIP(subnet, host, ranges)}
    {#if ip}
        <span>The IP of subnet {subnet} and host {host} is:</span>
        <span class="font-bold">{ip}</span>
    {/if}
{/if}
