import Link from "next/link";

/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * REMEMBER TO UPDATE THE LAST_UPDATED TIMESTAMP!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */

/**
 * Now page component that displays current activities and focus areas.
 * Shows a list of current projects/activities and when the page was last updated.
 * The last updated timestamp is either the actual last update time if recent,
 * or a deterministic random time on the previous Sunday.
 **/
export default function Now() {
  return (
    <div>
      <h2>Now Page</h2>
      <section>
        <h3>Current Focus</h3>
        <ul>
          <li>Building new personal website</li>
          <li>Reading "Rationality: From AI to Zombies" by Eliezer Yudkowsky</li>
          <li>Applying for jobs (Read my resume <Link href="/work">here</Link> and <Link href="mailto:daniel@demelo.co">email me!</Link>)</li>
        </ul>
      </section>
      <p className="text-sm text-gray-600 mt-8">
        Last updated: {getLastUpdated().toLocaleString()}
      </p>
    </div>
  );
}

/**
 * REMEMBER: UPDATE THIS!
 * 
 * ISO 8601 timestamp string representing when the Now page content was last manually updated.
 * Used by getLastUpdated() to determine whether to show the actual update time
 * or generate a deterministic random time.
 */
const LAST_UPDATED = "2024-11-25T20:49:43-08:00";

/**
 * Returns a date indicating when the "Now" page content was last updated.
 * If the static LAST_UPDATED date is within the last 2 weeks, returns that date.
 * Otherwise, returns a deterministic random time on the previous Sunday to
 * avoid showing stale dates while maintaining consistency between page loads.
 * 
 * Yes, this is how this works. You found me. Email me if you want a beer.
 * 
 * @returns {Date} The calculated last updated date
 */
function getLastUpdated(): Date {
  const updateDate = new Date(LAST_UPDATED);
  const now = new Date();

  // for testing
  // now.setDate((new Date()).getDate() - 24);

  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(now.getDate() - 14);

  if (updateDate >= twoWeeksAgo) {
    return updateDate;
  } else {
    return getDateWithDeterministicRandomTime(getPreviousSunday(now));
  }
}

/**
 * Gets the most recent Sunday before the given date (or current date if none provided).
 * Sets the time to midnight (00:00:00.000).
 * 
 * @param {Date} [date] - Optional date to find previous Sunday for. Defaults to current date.
 * @returns {Date} Date object representing midnight on the previous Sunday
 */
function getPreviousSunday(date?: Date): Date {
  const prevSunday = date ? new Date(date) : new Date();
  prevSunday.setDate(prevSunday.getDate() - prevSunday.getDay());
  prevSunday.setHours(0, 0, 0, 0);
  return prevSunday;
}

/**
 * Takes a date and returns a new Date with a deterministic random time between 7am and 10pm.
 * Uses the Unix timestamp of the input date to generate consistent hour/minute values.
 * This ensures the same input date always produces the same output time.
 * 
 * @param {Date} date - The input date to set a random time for
 * @returns {Date} New Date object with the original date but randomized time
 */
function getDateWithDeterministicRandomTime(date: Date): Date {
  // Get Unix timestamp of start of Sunday and use middle digits for more variation
  const sundayTimestamp = String(date.getTime());
  const middleStart = Math.max(0, Math.floor((sundayTimestamp.length - 4) / 2));
  const timeDigits = sundayTimestamp.slice(middleStart, middleStart + 4);

  // Extract hour and minute seeds
  const hourSeed = parseInt(timeDigits.slice(0, 2));
  const minuteSeed = parseInt(timeDigits.slice(2));

  // Map the seeds to our desired ranges
  const hour = 7 + (hourSeed % 15); // 7am to 10pm (7 + 0-14)
  const minute = minuteSeed % 60; // 0-59

  const newDate = (new Date(date))
  newDate.setHours(hour, minute);
  return newDate;
}