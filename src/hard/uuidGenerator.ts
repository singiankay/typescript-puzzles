import { randomBytes, randomInt } from 'crypto';

export class ObjectId {
    private data: Buffer;
    private static random: Buffer = randomBytes(4);
    private static counter: number = randomInt(0, 2 ** 24);

    constructor(type: number, timestamp: number) {
        this.data = Buffer.alloc(14); // 14 bytes for the ObjectId total
        const typeBuffer = Buffer.alloc(1);
        const timestampBuffer = Buffer.alloc(6);
        const counterBuffer = Buffer.alloc(3);

        typeBuffer.writeUInt8(type, 0);
        timestampBuffer.writeUIntBE(timestamp, 0, 6);

        counterBuffer.writeUIntBE(ObjectId.counter, 0, 3);
        this.data = Buffer.concat([typeBuffer, timestampBuffer, ObjectId.random, counterBuffer]);
        ObjectId.counter = (ObjectId.counter + 1) % (2 ** 24);

    }

    static generate(type?: number): ObjectId {
      return new ObjectId(type ?? 0, Date.now());
    }

    toString(encoding?: 'hex' | 'base64'): string {
      return this.data.toString(encoding ?? 'hex');
    }
}
