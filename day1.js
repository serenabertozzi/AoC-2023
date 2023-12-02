const input = "two74119onebtqgnine";
const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const calibrationValueFinder = (string) => {
  const inputToArray = string.split("");
  console.log(inputToArray);

  let firstNum = 0        

  inputToArray.forEach(char => {
    if (typeof char === "number" ) {
      return  firstNum = char
    }
  });
  console.log(firstNum);

}

calibrationValueFinder(input);
