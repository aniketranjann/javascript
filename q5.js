function score(num) {
  if (num >= 90) {
    return "A";
  } else if (num >= 80) {
    return "B";
  } else if (num >= 70) {
    return "C";
  } else {
    return "F";
  }
}
let result = score(79);
console.log(result);
