export function formatTime(totalSeconds: number): string {
  const seconds = Math.floor(totalSeconds);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const twoDigits = (value: number) => value.toString().padStart(2, "0");

  if (hours > 0) {
    return `${hours}:${twoDigits(minutes)}:${twoDigits(remainingSeconds)}`;
  }

  return `${twoDigits(minutes)}:${twoDigits(remainingSeconds)}`;
}
