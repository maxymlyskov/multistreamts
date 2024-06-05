export class SequentialQuickSort {
    public static sort(array: number[]): number[] {
        if (array.length <= 1) {
            return array;
        }

        const pivot = array[Math.floor(array.length / 2)];
        const left = array.filter(x => x < pivot);
        const middle = array.filter(x => x === pivot);
        const right = array.filter(x => x > pivot);

        return [...SequentialQuickSort.sort(left), ...middle, ...SequentialQuickSort.sort(right)];
    }
}
