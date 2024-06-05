import { SequentialQuickSort } from "../main/SequentialQuickSort";
import { ParallelQuickSort } from "../main/ParallelQuickSort";

describe("QuickSort Tests", () => {
    const array = [5, 3, 8, 4, 2, 7, 1, 10];

    test("Sequential QuickSort", () => {
        const sorted = SequentialQuickSort.sort(array);
        expect(sorted).toEqual([1, 2, 3, 4, 5, 7, 8, 10]);
    });

    test("Parallel QuickSort", async () => {
        const sorted = await ParallelQuickSort.sort(array);
        expect(sorted).toEqual([1, 2, 3, 4, 5, 7, 8, 10]);
    });
});
