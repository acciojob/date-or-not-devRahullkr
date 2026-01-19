var isDate = function (input) {
  //   write your code here
if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  // Check if it's a string that can be parsed into a valid date
  if (typeof input === "string") {
    const parsed = new Date(input);
    return !isNaN(parsed.getTime());
  }

  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
