export class SequentialSum {
    public static sum(array: number[]): number {
        return array.reduce((acc, curr) => acc + curr, 0);
    }
}
