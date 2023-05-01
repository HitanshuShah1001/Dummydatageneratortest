const values = require("../Constants/truthfalsyvalues");
function generateBoolean() {
  return values[Math.floor(Math.random() * 2)];
}

module.exports = generateBoolean;
