const Checkiflengthisnumber = ({ length }) => {
  if (typeof length !== "number") {
    throw new Error("Length must be a number");
  }
};

module.exports = Checkiflengthisnumber;
