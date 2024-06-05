import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import { SequentialSum } from './SequentialSum';

class ParallelSum {
    private static THRESHOLD = 10000;

    public static sum(array: number[]): Promise<number> {
        if (array.length <= 1) {
            return Promise.resolve(array[0] || 0);
        }

        if (array.length < this.THRESHOLD) {
            return Promise.resolve(SequentialSum.sum(array));
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
        ParallelSum.sum(left),
        ParallelSum.sum(right)
    ]).then(([leftSum, rightSum]) => {
        parentPort?.postMessage(leftSum + rightSum);
    });
}

export { ParallelSum };
