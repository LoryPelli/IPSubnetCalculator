import binary from './binary';
import type { Range } from './types';

export function findSubnet(ip: string, ranges: Range[]) {
    const decimal = parseInt(binary(ip), 2);
    for (let i = 0; i < ranges.length; i++) {
        const firstDecimal = parseInt(binary(ranges[i].first), 2);
        const lastDecimal = parseInt(binary(ranges[i].last), 2);
        if (decimal >= firstDecimal && decimal <= lastDecimal) {
            return `Subnet ${i}`;
        }
    }
}

export function findHost(ip: string, ranges: Range[]) {
    const decimal = parseInt(binary(ip), 2);
    for (let i = 0; i < ranges.length; i++) {
        const firstDecimal = parseInt(binary(ranges[i].first), 2);
        const lastDecimal = parseInt(binary(ranges[i].last), 2);
        if (decimal >= firstDecimal && decimal <= lastDecimal) {
            for (
                let j = firstDecimal, k = 1;
                j <= lastDecimal && k <= j;
                j++, k++
            ) {
                if (decimal == j) {
                    return `Host Number ${k}`;
                }
            }
        }
    }
}
