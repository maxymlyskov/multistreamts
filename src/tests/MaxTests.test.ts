import { SequentialMax } from "../main/SequentialMax";
import { ParallelMax } from "../main/ParallelMax";

describe("Max Tests", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    test("Sequential Max", () => {
        const max = SequentialMax.max(array);
        expect(max).toBe(10);
    });

    test("Parallel Max", async () => {
        const max = await ParallelMax.max(array);
        expect(max).toBe(10);
    });
});
