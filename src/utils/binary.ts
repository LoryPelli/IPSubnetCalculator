export default function binary(ip: string) {
    return ip
        .split('.')
        .map((n) => parseInt(n).toString(2).padStart(8, '0'))
        .join('');
}
