<script lang="ts">
    interface Props {
        subnets: number;
        hosts: number;
    }
    const { subnets, hosts }: Props = $props();
</script>

<span>Find IP of:</span>
<div class="flex gap-x-2 p-1">
    <select class="rounded-md border-2">
        {#each { length: subnets } as _, i}
            <option>Subnet {i}</option>
        {/each}
    </select>
    <select class="rounded-md border-2">
        {#each { length: hosts } as _, i}
            <option>Host {i + 1}</option>
        {/each}
    </select>
</div>
<button class="cursor-pointer rounded-md border-2 p-1.5">Find</button>
