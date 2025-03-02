export function binary(ip: string) {
    return ip
        .split('.')
        .map((n) => parseInt(n).toString(2).padStart(8, '0'))
        .join('');
}

export function decimal(ip: string) {
    return (
        ip
            .match(/.{8}/g)
            ?.map((_, i) => parseInt(ip.slice(i * 8, (i + 1) * 8), 2))
            .join('.') || ''
    );
}
