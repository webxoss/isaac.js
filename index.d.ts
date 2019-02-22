export as namespace Isaac;
export type Seed = number | string | number[];
export class Isaac {
  constructor(seed: number);
  seed(seed: Seed): void;
  prng(n: number): void;
  rand(): number;
  random(): number;
  internals(): any;
}
