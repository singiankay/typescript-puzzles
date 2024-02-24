export class ExecutionCache<TInputs extends Array<unknown>, TOutput> {
  private cache: Map<string, { result: Promise<TOutput>; lock: Promise<void> }> = new Map();
  constructor(private readonly handler: (...args: TInputs) => Promise<TOutput>) {}
  async fire(key: string, ...args: TInputs): Promise<TOutput> {
    if (!this.cache.has(key)) {
      const lock = new Promise<void>(async (resolve) => {
        const result = this.handler(...args);
        this.cache.set(key, { result, lock: Promise.resolve() });
        await result;
        resolve();
      });

      this.cache.get(key)!.lock = lock;
    }

    await this.cache.get(key)!.lock;
    return this.cache.get(key)!.result;
  }
}
