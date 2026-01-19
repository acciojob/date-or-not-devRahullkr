var isDate = function (input) {
  //   write your code here
if (Object.prototype.toString.call(input) === "[object Date]") {
    return !isNaN(input.getTime());
  }

  // Check for valid date string
  if (typeof input === "string") {
    const parsed = new Date(input);
    return !isNaN(parsed.getTime());
  }

  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
