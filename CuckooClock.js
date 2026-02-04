/**
Instructions:
The cuckoo bird pops out of the cuckoo clock and chimes once on the quarter hour, half hour, and three-quarter hour. At the beginning of each hour (1-12), it chimes out the hour. Given the current time and a positive integer n, determine the time when the cuckoo bird has chimed n times.

Inputs:
initial_time - a string in the format "HH:MM", where 1 ≤ HH ≤ 12 and 0 ≤ MM ≤ 59, with leading 0’s if necessary.
n - an integer representing the target number of chimes, with 1 ≤ n ≤ 200.

Output: The time when the cuckoo bird has chimed n times - a string in the same format as initial_time.

If the cuckoo bird chimes at initial_time, include those chimes in the count. If the n'thchime is reached on the hour, report the time at the start of that hour (i.e., assume the cuckoo finishes chiming before the minute is up).

Example: "03:38", 19 should return "06:00".
Explanation: It chimes once at "03:45",4 times at "04:00", once each at "04:15", "04:30", "04:45", 5 times at "05:00", and once each at "05:15", "05:30", "05:45". At this point it has chimed 16 times, so the 19th chime occurs when it chimes 6 times at "06:00".

Source: International Collegiate Programming Contest, North Central North American Regional, 2023.
*/

function cuckooClock(inputTime, chimes) {
    let [hours, minutes] = inputTime.split(':').map(Number);
    let remainingChimes = chimes;

    // Helper: Formats 0 into 12 for 12-hour clock
    const getChimesOnHour = (h) => h === 0 ? 12 : h;

    // Helper: Format back to "HH:MM"
    const format = (h, m) => {
        let displayH = h === 0 ? 12 : h;
        return `${displayH.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    };

    // Step 1: Check if starting EXACTLY on a chime interval
    if (minutes % 15 === 0) {
        let current = (minutes === 0) ? getChimesOnHour(hours % 12) : 1;
        if (remainingChimes <= current) return format(hours % 12, minutes);
        remainingChimes -= current;
    }

    // Step 2: Jump to the next 15-minute mark
    let totalMinutes = hours * 60 + minutes;
    totalMinutes += (15 - (totalMinutes % 15));

    // Step 3: Loop until chimes are exhausted
    while (true) {
        let currentH = Math.floor(totalMinutes / 60) % 12;
        let currentM = totalMinutes % 60;
        
        let currentChimes = (currentM === 0) ? getChimesOnHour(currentH) : 1;
        
        if (remainingChimes <= currentChimes) {
            return format(currentH, currentM);
        }
        
        remainingChimes -= currentChimes;
        totalMinutes += 15;
    }
}
