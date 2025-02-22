<script lang="ts">
    interface Props {
        ip: string;
        subnets: number;
    }
    const { ip, subnets }: Props = $props();
    const first = parseInt(ip).toString(2).split('');
    let ipClass: 'A' | 'B' | 'C' | undefined = $state();
    let defaultSubnetMask: '255.0.0.0' | '255.255.0.0' | '255.255.255.0';
    if (parseInt(first[0]) == 0) {
        ipClass = 'A';
        defaultSubnetMask = '255.0.0.0';
    } else {
        if (parseInt(first[1]) == 0) {
            ipClass = 'B';
            defaultSubnetMask = '255.255.0.0';
        } else {
            ipClass = 'C';
            defaultSubnetMask = '255.255.255.0';
        }
    }
    let binarySubnetMask = defaultSubnetMask
        .split('.')
        .map((n) => parseInt(n).toString(2).padStart(8, '0'))
        .join('');
    let binarySubnetMaskArray = binarySubnetMask.split('');
    let bits = Math.ceil(Math.log2(subnets));
    for (let i = 0; i < binarySubnetMaskArray.length && bits > 0; i++) {
        if (binarySubnetMaskArray[i] == '0') {
            binarySubnetMaskArray[i] = '1';
            bits--;
        }
    }
    binarySubnetMask = binarySubnetMaskArray.join('');
    const subnetMask = $state(defaultSubnetMask);
    const newSubnetMask = $state(
        Array.from({ length: 4 }, (_, i) =>
            parseInt(binarySubnetMask.slice(i * 8, (i + 1) * 8), 2),
        ).join('.'),
    );
</script>

<span class="font-bold">General information:</span>
<span>IP: {ip}</span>
<span>Number of subnets: {subnets}</span>
<span>Class: {ipClass}</span>
<span class="font-bold">Detailed information:</span>
<span>Default subnet mask: {subnetMask}</span>
<span>New subnet mask: {newSubnetMask}</span>
