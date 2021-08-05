const fs = require("fs");

const dataBuffer = fs.readFileSync("1.json"); //read buffer bytes data 1
const dataJSONString = dataBuffer.toString(); // from 1 , convert buffer to string
console.log(dataJSONString);
const dataJSON = JSON.parse(dataJSONString); //convert json string to object or json object

dataJSON.name = 'Omar'
dataJSON.age = "22"
dataJSON.status = "Exellent"

console.log(dataJSON);

const finalJSONString = JSON.stringify(dataJSON); // convert an obj to Json String, because file sys just accepted a string val
// function writeFileSync(file: fs.PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, options?: fs.WriteFileOptions): void

console.log(finalJSONString)

fs.writeFileSync("1.json",finalJSONString); //nailed it 