export default function wildcardMask(subnetMask: string) {
    return subnetMask
        .split('.')
        .map((n) => 255 - parseInt(n))
        .join('.');
}
