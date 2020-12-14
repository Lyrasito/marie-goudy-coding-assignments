const nextVersion = (input) => {
  const numArray = input.split(".");
  let i = numArray.length - 1;
  //iterate backwards over the array, turning any 9s into 0s until the first number is reached
  while (numArray[i] == 9 && i > 0) {
    numArray[i] = 0;
    i--;
  }
  //increment the last number that isn't 9 (unless it's the first number) by 1
  numArray[i]++;
  return numArray.join(".");
};

module.exports = nextVersion;
