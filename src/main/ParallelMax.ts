import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import { SequentialMax } from './SequentialMax';

class ParallelMax {
    private static THRESHOLD = 10000;

    public static max(array: number[]): Promise<number> {
        if (array.length <= 1) {
            return Promise.resolve(array[0] || Number.NEGATIVE_INFINITY);
        }

        if (array.length < this.THRESHOLD) {
            return Promise.resolve(SequentialMax.max(array));
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
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    Promise.all([
        ParallelMax.max(left),
        ParallelMax.max(right)
    ]).then(([leftMax, rightMax]) => {
        parentPort?.postMessage(Math.max(leftMax, rightMax));
    });
}

export { ParallelMax };
