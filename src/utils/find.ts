import { decimal } from './conversion';

export function findSubnet(
    ip: string,
    networkBits: number,
    subnetBits: number,
) {
    const host = ip.slice(networkBits);
    const withSubnet = host.slice(subnetBits);
    const hostBits = 32 - networkBits - subnetBits;
    if (
        hostBits != 0 &&
        hostBits != 1 &&
        (withSubnet == '0'.repeat(hostBits) ||
            withSubnet == '1'.repeat(hostBits))
    ) {
        return -1;
    }
    return parseInt(host.slice(0, subnetBits), 2) || 0;
}

export function findHost(ip: string, networkBits: number, subnetBits: number) {
    const host = ip.slice(networkBits);
    const withSubnet = host.slice(subnetBits);
    const hostBits = 32 - networkBits - subnetBits;
    if (
        hostBits != 0 &&
        hostBits != 1 &&
        (withSubnet == '0'.repeat(hostBits) ||
            withSubnet == '1'.repeat(hostBits))
    ) {
        return -1;
    }
    return parseInt(host.slice(subnetBits), 2) || 1;
}

export function findIP(
    startIP: string,
    subnet: number,
    host: number,
    networkBits: number,
    subnetBits: number,
) {
    const binarySubnet = subnet.toString(2).padStart(subnetBits, '0');
    const hostBits = 32 - networkBits - subnetBits;
    const binaryHost = host.toString(2).padStart(hostBits, '0');
    const network = startIP.slice(0, networkBits);
    const ip = network + binarySubnet + binaryHost;
    return decimal(ip);
}
