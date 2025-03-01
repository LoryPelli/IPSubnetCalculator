<script lang="ts">
    import { findSubnet, findHost } from '../utils/find';
    import type { Range } from '../utils/types';
    interface Props {
        ip: string;
        subnets: number;
        ranges: Range[];
    }
    const { ip, ranges }: Props = $props();
    let found = $state(false);
</script>

<span>Find the subnet number and the host number of:</span>
<span class="font-bold">{ip}</span>
<button
    class="cursor-pointer rounded-md border-2 p-1.5"
    onclick={() => (found = true)}>Find!</button
>
{#if found}
    <span>The IP {ip} is in the:</span>
    <span class="font-bold">{findSubnet(ip, ranges)}</span>
    <span>And the</span>
    <span class="font-bold">{findHost(ip, ranges)}</span>
{/if}
