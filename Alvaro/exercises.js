
const myVariable ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam sit amet magna nec dictum. Ut viverra mollis purus vel porta. Aenean ut sem fermentum enim viverra interdum vehicula eu nibh. Nullam accumsan tortor eu turpis egestas, et maximus mauris elementum. Vivamus varius vel lacus non tincidunt. Aenean vel arcu arcu.";
const textLength =myVariable.length;
console.log(textLength);

const message= "La longitud de este texto es "+ textLength;
console.log(message);

const stringUp = myVariable.toUpperCase();
console.log(stringUp);
const stringLower =stringUp.toLocaleLowerCase();
console.log(stringLower);

const replaceString= myVariable.replaceAll("i","o");
console.log(replaceString);

const splitWords= myVariable.split(" ");
const contWords= splitWords.length;
console.log(contWords);

const myString= myVariable.slice(-5 ,-3);
console.log(myString);

const lastExample= "    accumsan   ";
const exampalTrim= lastExample.trim();
console.log(exampalTrim);