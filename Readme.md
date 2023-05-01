

dummydata-generator

A simple npm package to generate dummy data. The package provides an easy way to generate dummy data for testing purposes. The package can generate string, number, and boolean data types.

Installation

You can install this package using npm. Run the following command:

bash
Copy code
npm install dummydata-generator
Usage

To use the package, import it into your project:

javascript
Copy code
const generateDummyData = require('dummydata-generator');
Then you can use the generateDummyData() function to generate dummy data.

javascript
Copy code
const fields = [
  { id: Number },
  { name: String },
  { age: Number, length: 2 },
  { isVerified: Boolean },
];

const totalnumberofdatatobegenerated = 5;

const dummydata = generateDummyData({ totalnumberofdatatobegenerated, fields });
console.log(dummydata);
Parameters
The function generateDummyData() takes two parameters:

totalnumberofdatatobegenerated: The total number of data objects to be generated.
fields: An array of objects, where each object represents a field in the generated data object. The keys of the object represent the field name, and the values represent the data type of the field. The supported data types are:
Number: Generates a random number.
String: Generates a random string.
Boolean: Generates a random boolean value.
You can also provide an optional length property to generate a string or number of a specific length.
Example
javascript
Copy code
const fields = [
  { id: Number },
  { name: String },
  { age: Number, length: 2 },
  { isVerified: Boolean },
];

const totalnumberofdatatobegenerated = 5;

const dummydata = generateDummyData({ totalnumberofdatatobegenerated, fields });
console.log(dummydata);
The output will be an array of objects like the following:

javascript
Copy code
[
  { id: 9420, name: 'zTVfeftCXql', age: 81, isVerified: false },
  { id: 2946, name: 'GvLKhunAjmc', age: 74, isVerified: true },
  { id: 2407, name: 'cQKrHDvUSLq', age: 28, isVerified: false },
  { id: 9420, name: 'GtOyxcwJpxC', age: 81, isVerified: false },
  { id: 2946, name: 'NGyvlhnxtJi', age: 74, isVerified: true }
]
Note: If the fields are of type String or Number, you can add a length property to generate a value of that length.