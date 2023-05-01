const Validation = ({ fields }) => {
  let typesAllowed = [Array, String, Boolean, Number];
  if (!Array.isArray(fields)) {
    throw new Error(
      "Field must be array of objects containing properties and their types"
    );
  }
  fields.map((field) => {
    console.log(typeof Object.values(field)[0]);
  });
  if (
    fields.some(
      (fieldtype) => !typesAllowed.includes(Object.values(fieldtype)[0])
    )
  ) {
    throw new Error(
      "Field types must contain only String,Boolean or Number values"
    );
  }
};

module.exports = Validation;
