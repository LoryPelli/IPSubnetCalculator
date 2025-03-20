import { decimal } from './conversion';

export function findSubnet(
    ip: string,
    networkBits: number,
    subnetBits: number,
) {
    const host = ip.slice(networkBits);
    const hostBits = 32 - networkBits;
    if (host == '0'.repeat(hostBits) || host == '1'.repeat(hostBits)) {
        return -1;
    }
    return parseInt(host.slice(0, subnetBits), 2) || 0;
}

export function findHost(ip: string, networkBits: number, subnetBits: number) {
    const host = ip.slice(networkBits);
    const hostBits = 32 - networkBits;
    if (host == '0'.repeat(hostBits) || host == '1'.repeat(hostBits)) {
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
    const binaryHost = host
        .toString(2)
        .padStart(32 - networkBits - subnetBits, '0');
    const network = startIP.slice(0, networkBits);
    const ip = network + binarySubnet + binaryHost;
    return decimal(ip);
}
