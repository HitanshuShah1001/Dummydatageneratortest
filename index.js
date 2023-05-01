const generateNumber = require("./Utils/generateNumber");
const generateString = require("./Utils/generateString");
const generateBoolean = require("./Utils/generateBoolean");
const Validation = require("./Utils/validation");

function getDummyData({ totalnumberofdatatobegenerated, fields }) {
  let dummydata = [];
  let lengthoffields = fields.length;

  Validation({ fields });
  for (let index = 0; index < totalnumberofdatatobegenerated; index++) {
    let individualobj = {};
    for (let field = 0; field < lengthoffields; field++) {
      let key = Object.keys(fields[field])[0];
      let type = Object.values(fields[field])[0];
      switch (type) {
        case Number:
          individualobj[key] = generateNumber();
          break;
        case Boolean:
          individualobj[key] = generateBoolean();
          break;
        default:
          individualobj[key] = generateString();
          break;
      }
    }
    dummydata.push(individualobj);
  }
  return dummydata;
}

console.log(
  getDummyData({
    totalnumberofdatatobegenerated: 3,
    fields: [{ name: String }, { phone: Number }],
  })
);
module.exports = getDummyData;
