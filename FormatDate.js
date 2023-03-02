// To format the date string "2022-07-18T15:26:20.000000Z" into "Feb 24, 2023"

const dateString1 = "2022-07-18T15:26:20.000000Z";
const date1 = new Date(dateString1);
const formattedDate1 = date1.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

console.log(formattedDate1); // Output: Jul 18, 2022


// To format the date string "2022-07-18T15:26:20.000000Z" into "Jul 18, 2022, 3:26:20 PM"

const dateString2 = "2022-07-18T15:26:20.000000Z";
const date2 = new Date(dateString2);
const options2 = { 
  month: "short", 
  day: "numeric", 
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true
};
const formattedDate2 = date2.toLocaleDateString("en-US", options2);

console.log(formattedDate2); // Output: Jul 18, 2022, 3:26:20 PM


// To format the date string "2022-07-18T15:26:20.000000Z" into "Jul 18, 2022, 3:26 PM"
const dateString3 = "2022-07-18T15:26:20.000000Z";
const date3 = new Date(dateString3);
const options3 = { 
  month: "short", 
  day: "numeric", 
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true
};
const formattedDate3 = date3.toLocaleDateString("en-US", options3);

console.log(formattedDate3); // Output: Jul 18, 2022, 3:26 PM

// To format the date string "2022-07-18T15:26:20.000000Z" into "Jul 18, 2022 at 3:26 PM"

const dateString4 = "2022-07-18T15:26:20.000000Z";
const date4 = new Date(dateString4);
const options4 = { 
  month: "short", 
  day: "numeric", 
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true
};
const formattedDate4 = `${date4.toLocaleDateString("en-US", options4)} at ${date4.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true })}`;

console.log(formattedDate4); // Output: Jul 18, 2022 at 3:26 PM

// To format the date string "2023-02-23T00:00:00.000Z" into "Feb 23,2023" with space between month and day but without space between day and year, you can use the following code:

const dateString5 = "2023-02-23T00:00:00.000Z";
const date5 = new Date(dateString5);
const options5 = { 
  month: "short", 
  day: "2-digit", 
  year: "numeric"
};
const formattedDate5 = date5.toLocaleDateString("en-US", options5).replace(/(\w{3}) (\d{2}), /, "$1 $2,");

console.log(formattedDate5); // Output: Feb 23,2023
