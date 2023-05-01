function generateNumber({ length = undefined }) {
  let randomNumber;
  if (!length) {
    randomNumber = Math.floor(Math.random() * 1000);
  } else {
    randomNumber = Math.floor(Math.random() * Math.pow(10, length));
  }

  return randomNumber;
}

module.exports = generateNumber;
