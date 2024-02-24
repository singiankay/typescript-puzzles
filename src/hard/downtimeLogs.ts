export type DowntimeLogs = [Date, Date][];

export function merge(...args: DowntimeLogs[]): DowntimeLogs {
  const flattenedLogs = args.reduce(
    (acc, curr) => acc.concat(curr),
  []);
  const sortedLogs = flattenedLogs.sort(
    (a, b) => a[0].getTime() - b[0].getTime()
  );

  const mergedLogs: DowntimeLogs = [];
  let currentLog: [Date, Date] | undefined = undefined;

  for (const log of sortedLogs) {
    if (!currentLog) {
      currentLog = log;
    } else {
      const [currentStart, currentEnd]: [Date,Date] = currentLog;
      const [newStart, newEnd] = log;

      if (newStart <= currentEnd) {
        currentLog = [currentStart, newEnd > currentEnd ? newEnd : currentEnd];
      } else {
        mergedLogs.push(currentLog);
        currentLog = log;
      }
    }
  }

  if (currentLog) {
    mergedLogs.push(currentLog);
  }

  return mergedLogs;
}
