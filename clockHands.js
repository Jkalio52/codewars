/**
In some parts of the world, you might still find round analog clocks with hour, minute, and second hands. Such clocks are divided up into 12 hours, with a 12 at the top and a 6 at the bottom.

Write a function that produces a sequence of successive times in which the hour and minute hand make a given angle, which will be given in degrees, measured clockwise from the hour hand to the minute hand. 
The times must be formatted as HH:MM:SS, zero-padding all time components. Use 12 (not 00) for the hour component for midnight. If the actual time is in between two seconds, choose the smaller time value.

The first result in your array should be either midnight or the first time after midnight, such as 12:32:43 for the 180 degree case. There should be only 11 results in the output.
*/

function clockHands(angle) {
  // Normalize angle to [0, 360)
  const normalizedAngle = ((angle % 360) + 360) % 360;
  const results = [];

  for (let k = 0; k < 11; k++) {
    const t = (120 / 11) * (360 * k + normalizedAngle);
    const totalSeconds = Math.floor(t + 1e-9);

    let h = Math.floor(totalSeconds / 3600) % 12;
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    const displayH = h === 0 ? "12" : h.toString().padStart(2, '0');
    const displayM = m.toString().padStart(2, '0');
    const displayS = s.toString().padStart(2, '0');

    results.push(`${displayH}:${displayM}:${displayS}`);
  }

  return results; //your code here
}

