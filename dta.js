// Sample API data for a region
const apiData = {
    dt: 1731221527, // Current time in Unix timestamp (in seconds)
    sys: {
        sunrise: 1731221537, // Sunrise time in Unix timestamp (in seconds)
        sunset: 1731255416   // Sunset time in Unix timestamp (in seconds)
    },
    timezone: 3600, // Timezone offset in seconds (UTC+1 for Kozhikode)
    name: "Kozhikode"
};

// Function to convert Unix timestamp to a readable time string (without date)
function convertUnixToLocalTime(unixTimestamp, timezoneOffset) {
    // Adjust Unix timestamp with timezone offset and convert to milliseconds
    const adjustedTime = (unixTimestamp + timezoneOffset) * 1000;
    const localDate = new Date(adjustedTime);

    // Extract hours and minutes in 12-hour format
    let hours = localDate.getUTCHours();
    const minutes = localDate.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

    // Format hours and minutes as a string
    return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

// Function to convert Unix timestamp to date and time string (for current time)
function convertUnixToLocalDateTime(unixTimestamp, timezoneOffset) {
    // Adjust Unix timestamp with timezone offset and convert to milliseconds
    const adjustedTime = (unixTimestamp + timezoneOffset) * 1000;
    const localDate = new Date(adjustedTime);

    // Extract day, month, year, hours, and minutes
    const day = localDate.getUTCDate();
    const month = localDate.getUTCMonth() + 1; // Months are zero-indexed
    const year = localDate.getUTCFullYear();

    let hours = localDate.getUTCHours();
    const minutes = localDate.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

    // Format date, hours, and minutes as a string
    const dateString = `${day}-${month}-${year}`;
    const timeString = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    return `${dateString} ${timeString}`;
}

// Applying the functions with dynamic timezone offset
const cityName = apiData.name;
const currentDateTime = convertUnixToLocalDateTime(apiData.dt, apiData.timezone);
const sunriseTime = convertUnixToLocalTime(apiData.sys.sunrise, apiData.timezone);
const sunsetTime = convertUnixToLocalTime(apiData.sys.sunset, apiData.timezone);

// Display the results
console.log(`City: ${cityName}`);
console.log("Current Local Date & Time:", currentDateTime); // Shows date and time
console.log("Sunrise:", sunriseTime); // Shows time only
console.log("Sunset:", sunsetTime);   // Shows time only
