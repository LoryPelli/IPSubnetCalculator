<script lang="ts">
    interface Props {
        show: boolean;
        ip: string;
        subnets: number;
    }
    const { show, ip, subnets }: Props = $props();
</script>

{#if show}
    <span>IP: {ip}</span>
    <span>Number of subnets: {subnets}</span>
{/if}
