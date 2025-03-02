<script lang="ts">
    interface Props {
        subnets: number;
        hosts: number;
    }
    const { subnets, hosts }: Props = $props();
    let subnet = $state(0);
    let host = $state(1);
    let found = $state(false);
</script>

<span>Find IP of:</span>
<div class="flex gap-x-2 p-1">
    <span>Subnet:</span>
    <select class="w-20 rounded-md border-2 text-center" bind:value={subnet}>
        {#each { length: subnets } as _, i}
            <option>{i}</option>
        {/each}
    </select>
    <span>Host:</span>
    <select class="w-20 rounded-md border-2 text-center" bind:value={host}>
        {#each { length: hosts } as _, i}
            <option>{i + 1}</option>
        {/each}
    </select>
</div>
<button
    class="cursor-pointer rounded-md border-2 p-1.5"
    onclick={() => (found = true)}>Find</button
>
