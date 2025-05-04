export function charDiffSafe(char1: string, char2: string = 'a'): number {
    if (char1.length !== 1 || char2.length !== 1) {
        throw new Error('Both inputs must be single characters.');
    }
    return char1.charCodeAt(0) - char2.charCodeAt(0);
}
