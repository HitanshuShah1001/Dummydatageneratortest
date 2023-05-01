const generateNumber = require("./Utils/generateNumber");
const generateString = require("./Utils/generateString");
const generateBoolean = require("./Utils/generateBoolean");
const Validation = require("./Utils/validation");
const Checkiflengthisnumber = require("./Utils/Checkiflengthisnumber");

function getDummyData({ totalnumberofdatatobegenerated, fields }) {
  let dummydata = [];
  let lengthoffields = fields.length;

  Validation({ fields });
  for (let index = 0; index < totalnumberofdatatobegenerated; index++) {
    let individualobj = {};
    for (let field = 0; field < lengthoffields; field++) {
      let keys = Object.keys(fields[field]);
      let values = Object.values(fields[field]);
      let key = keys[0];
      let type = values[0];
      switch (type) {
        case Number:
          if (keys.includes("length")) {
            Checkiflengthisnumber({ length: values[1] });
            individualobj[key] = generateNumber({ length: values[1] });
            break;
          }
          individualobj[key] = generateNumber();
          break;
        case Boolean:
          individualobj[key] = generateBoolean();
          break;

        default:
          if (keys.includes("length")) {
            Checkiflengthisnumber({ length: values[1] });
            individualobj[key] = generateString({ length: values[1] });
            break;
          }

          individualobj[key] = generateString();
          break;
      }
    }
    dummydata.push(individualobj);
  }
  return dummydata;
}

module.exports = getDummyData;
