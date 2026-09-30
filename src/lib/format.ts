function ago(count: number, unit: string, article = "a") {
  return count <= 1 ? `${article} ${unit} ago` : `${count} ${unit}s ago`;
}

/** Rough, human-friendly relative time, e.g. "a year ago" or "3 days ago". */
export function formatTimeAgo(date: string | Date, now: Date = new Date()) {
  const seconds = Math.max(0, (now.getTime() - new Date(date).getTime()) / 1000);
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (seconds < 45) return "just now";
  if (minutes < 45) return ago(Math.round(minutes), "minute");
  if (hours < 22) return ago(Math.round(hours), "hour", "an");
  if (days < 26) return ago(Math.round(days), "day");
  if (days < 320) return ago(Math.round(days / 30.44), "month");
  return ago(Math.round(days / 365.25), "year");
}
