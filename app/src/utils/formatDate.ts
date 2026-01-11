export function formattedJstDatetime(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getDate())) {
    return "-";
  }
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
