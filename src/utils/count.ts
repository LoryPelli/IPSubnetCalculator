export default function count(str: string[], digit: string) {
    return str.reduce((acc, val) => acc + (val == digit ? 1 : 0), 0);
}
