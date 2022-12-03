// convert the given ISO 8601 format date string to yyyy-mm-dd format
export const formatDate = (date: string) => {
  let formatedDate = date ? date.substring(0, 10) : '';

  return formatedDate;
};

//get the average of given number array
export const getAverage = (numbersArray: Array<number>) => {
  let averageVal = 0;

  if (numbersArray && numbersArray.length > 0) {
    const sumOfNumbers = numbersArray.reduce((sum, value) => {
      return sum + value;
    }, 0);
    averageVal = sumOfNumbers / numbersArray.length;
  }
  return averageVal;
};

export const getOptionCount = (
  answerArray: Array<Array<boolean>>,
  optionIndex: number,
) => {
  let optCount = 0;

  answerArray.forEach((answerList: Array<boolean>) => {
    if (answerList[optionIndex]) {
      optCount += 1;
    }
  });

  return optCount;
};
