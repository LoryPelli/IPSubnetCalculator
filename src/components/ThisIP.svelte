<script lang="ts">
    import { decimal } from '../utils/conversion';
    import { findSubnet, findHost } from '../utils/find';
    interface Props {
        ip: string;
        networkBits: number;
        subnetBits: number;
    }
    const { ip, networkBits, subnetBits }: Props = $props();
    let found = $state(false);
</script>

<span class="flex flex-col items-center"
    >Find the subnet number and the host number of: <span class="font-bold"
        >{decimal(ip)}</span
    ></span
>
<button
    class="cursor-pointer rounded-md border-2 p-1.5"
    onclick={() => (found = true)}>Find</button
>
{#if found}
    {@const subnet = findSubnet(ip, networkBits, subnetBits)}
    {@const host = findHost(ip, networkBits, subnetBits)}
    {#if subnet == -1 || host == -1}
        <span class="font-bold text-red-600">Not a valid host IP!</span>
    {:else}
        <span>Subnet: <span class="font-bold">{subnet}</span></span>
        <span>Host: <span class="font-bold">{host}</span></span>
    {/if}
{/if}
