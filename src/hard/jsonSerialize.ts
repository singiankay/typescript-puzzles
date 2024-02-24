export type Value = string | number | boolean | null | undefined |
  Date | Buffer | Map<unknown, unknown> | Set<unknown> |
  Array<Value> | { [key: string]: Value };

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

/**
 * Transforms JavaScript scalars and objects into JSON
 * compatible objects.
 */
export function serialize(value: Value): unknown {
  if (value instanceof Date) {
    return {
      __t: 'Date',
      __v: value.getTime()
    };
  }
  else if (value instanceof Buffer) {
    return {
      __t: 'Buffer',
      __v: Array.from(value)
    };
  }
  else if (value instanceof Map) {
    return {
      __t: 'Map',
      __v: Array.from(value.entries())
    };
  }
  else if (value instanceof Set) {
    return {
      __t: 'Set',
      __v: Array.from(value)
    };
  }
  else if (Array.isArray(value)) {
    return value.map(serialize);
  }
  else if (isObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => {
        return [k, serialize(v as Value)]
      })
    );
  }
  return value;
}

/**
 * Transforms JSON compatible scalars and objects into JavaScript
 * scalar and objects.
 */
export function deserialize<T = unknown>(value: unknown): T {
  if (Array.isArray(value)) {
    return value.map(deserialize) as unknown as T;
  }
  if (isObject(value) && '__t' in value && '__v' in value) {
    switch (value.__t) {
      case 'Date':
        return new Date(value.__v as number) as T;
      case 'Buffer':
        return Buffer.from(value.__v as number[]) as T;
      case 'Map':
        return new Map(value.__v as [unknown, unknown][]) as T;
      case 'Set':
        return new Set(value.__v as unknown[]) as T;
    }
  }
  if (isObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, deserialize(v)]
    )) as T;
  }

  return value as T;
}
