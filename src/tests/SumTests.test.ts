import { SequentialSum } from "../main/SequentialSum";
import { ParallelSum } from "../main/ParallelSum";

describe("Sum Tests", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    test("Sequential Sum", () => {
        const sum = SequentialSum.sum(array);
        expect(sum).toBe(55);
    });

    test("Parallel Sum", async () => {
        const sum = await ParallelSum.sum(array);
        expect(sum).toBe(55);
    });
});
