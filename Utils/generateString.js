const characters = require("../Constants/characters");
function generateString({ length = undefined }) {
  let randomString = "";

  let totallengthofstringtobegenerated = length
    ? length
    : Math.ceil(Math.random() * 26);
  for (let i = 0; i < totallengthofstringtobegenerated; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
}

module.exports = generateString;
