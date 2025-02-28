export default function decimal(ip: string) {
    return (
        ip
            .match(/.{8}/g)
            ?.map((_, i) => parseInt(ip.slice(i * 8, (i + 1) * 8), 2))
            .join('.') || ''
    );
}
