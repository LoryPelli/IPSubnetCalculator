export default function usable(ip: string, num: number) {
    return ip
        .split('.')
        .map((n, i) => (i == 3 ? parseInt(n) + num : n))
        .join('.');
}
