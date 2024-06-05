import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import { SequentialQuickSort } from './SequentialQuickSort';

class ParallelQuickSort {
    private static THRESHOLD = 10000;

    public static sort(array: number[]): Promise<number[]> {
        if (array.length <= 1) {
            return Promise.resolve(array);
        }

        if (array.length < this.THRESHOLD) {
            return Promise.resolve(SequentialQuickSort.sort(array));
        }

        return new Promise((resolve, reject) => {
            const worker = new Worker(__filename, {
                workerData: array
            });

            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject(new Error(`Worker stopped with exit code ${code}`));
            });
        });
    }
}

if (!isMainThread) {
    const array = workerData;
    const pivot = array[Math.floor(array.length / 2)];
    const left = array.filter((x: number) => x < pivot);
    const middle = array.filter((x: number) => x === pivot);
    const right = array.filter((x: number) => x > pivot);

    Promise.all([
        ParallelQuickSort.sort(left),
        ParallelQuickSort.sort(right)
    ]).then(([sortedLeft, sortedRight]) => {
        parentPort?.postMessage([...sortedLeft, ...middle, ...sortedRight]);
    });
}

export { ParallelQuickSort };
