# Algorithm Performance Measurement

This project demonstrates the performance comparison of sequential and parallel versions of different algorithms using TypeScript. The algorithms included are QuickSort, sum of array elements, and finding the maximum element in an array.


## Overview

The project implements both sequential and parallel versions of the following algorithms:
- QuickSort
- Sum of array elements
- Finding the maximum element in an array

The results of the performance measurement are displayed on a web page styled with Tailwind CSS.

## Project Structure

|-- src/
| |-- main/
| | |-- ParallelQuickSort.ts
| | |-- SequentialQuickSort.ts
| | |-- ParallelSum.ts
| | |-- SequentialSum.ts
| | |-- ParallelMax.ts
| | |-- SequentialMax.ts
| | |-- MeasureExecution.ts
| |-- tests/
| |-- QuickSortTests.ts
| |-- SumTests.ts
| |-- MaxTests.ts
|-- public/
| |-- index.html
|-- package.json
|-- tsconfig.json
|-- jest.config.js
|-- bs-config.json


## Installation

1. Clone the repository:

    ```bash
    https://github.com/maxymlyskov/multistreamts.git
    cd multistreamts
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Running Tests

To run the unit tests for all algorithms, use the following command:

```bash
npm test
