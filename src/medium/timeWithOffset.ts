const timeWithOffset = (timeStr: string, offset: number) => {
  // Parse the input time string to get hours and minutes
  const [hoursStr, minutesStr] = timeStr.split(":");
  let hours = parseInt(hoursStr);
  let minutes = parseInt(minutesStr);

  // Calculate the new time
  const totalMinutes = hours * 60 + minutes;
  const newTotalMinutes = totalMinutes + offset * 60;

  // Ensure the result is within the range of 0 to 24 hours
  const normalizedMinutes = (newTotalMinutes + 1440) % 1440; // 1440 minutes in a day
  const newHours = Math.floor(normalizedMinutes / 60);
  const newMinutes = normalizedMinutes % 60;

  // Format the result as a string
  const formattedHours = String(newHours).padStart(2, "0");
  const formattedMinutes = String(newMinutes).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
};

export default timeWithOffset;
