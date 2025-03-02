import { binary, decimal } from '../utils/conversion';
import type { Range } from './types';

export function findSubnet(ip: string, ranges: Range[]) {
    const decimal = parseInt(binary(ip), 2);
    for (let i = 0; i < ranges.length; i++) {
        const firstDecimal = parseInt(binary(ranges[i].first), 2);
        const lastDecimal = parseInt(binary(ranges[i].last), 2);
        if (decimal >= firstDecimal && decimal <= lastDecimal) {
            return i;
        }
    }
    return -1;
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
                    return k;
                }
            }
        }
    }
    return -1;
}

export function findIP(subnet: number, host: number, ranges: Range[]) {
    const range = ranges[subnet];
    const firstDecimal = parseInt(binary(range.first), 2);
    const lastDecimal = parseInt(binary(range.last), 2);
    for (let i = firstDecimal; i <= lastDecimal; i++) {
        if (i - firstDecimal == host) {
            return decimal(binary((i - 1).toString()));
        }
    }
}
