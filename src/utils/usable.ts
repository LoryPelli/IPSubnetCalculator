export default function usable(ip: string, bits: number, num: number) {
    return ip
        .split('.')
        .map((n, i) => (i == bits / 8 ? parseInt(n) + num : n))
        .join('.');
}
