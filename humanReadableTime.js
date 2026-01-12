function humanReadable(seconds) {
  // TODO
  // Guard clause: Ensure the input is within a reasonable range (0 to 99:59:59)
  if (seconds < 0 || seconds > 359999) {
    return null;
  }

  // 1. Calculate Hours: 3600 seconds in an hour
  let hours = Math.floor(seconds / 3600);
  // Remove the hours we just calculated from the total seconds pool
  seconds -= hours * 3600;
  // Manual Padding: Add leading zero if hours is a single digit
  if (hours < 10) {
    hours = '0' + hours;
  }

  // 2. Calculate Minutes: 60 seconds in a minute
  let minutes = Math.floor(seconds / 60);
  // Remove the minutes from the remaining seconds pool
  seconds -= minutes * 60;
  // Manual Padding: Add leading zero if minutes is a single digit
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  // 3. Remaining Seconds: What's left is our 'SS' value
  // Manual Padding: Add leading zero if seconds is a single digit
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  // Combine into the final string format HH:MM:SS
  return hours + ':' + minutes + ':' + seconds;
}





/**
Refactor - Modern, DRY version of the time formatter
DRY (Don't Repeat Yourself) using padStart(), and this avoids all those if statements

*/
function humanReadableModern(totalSeconds) {
  // Basic bounds check
  if (totalSeconds < 0 || totalSeconds > 359999) return "99:59:59";

  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60); // Use modulo for cleaner math
  const s = totalSeconds % 60;

  // Helper to pad numbers to 2 digits
  const format = (num) => String(num).padStart(2, '0');

  // Return using Template Literals
  return `${format(h)}:${format(m)}:${format(s)}`;
}

