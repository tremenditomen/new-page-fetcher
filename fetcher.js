const fs = require("fs");
const request = require("request");

const fetcher = (URL, filePath) => {
  let commandLineArguments = process.argv.slice(2);
  const url = commandLineArguments[0] + "";
  const filePathWrite = commandLineArguments[1] + "";

  request(url, (error, response, body) => {
    if (error) {
      console.log("there was an error with the URL provided. Please try again");
    } else {
      fs.writeFile(filePathWrite, body, function (err) {
        return console.log(err);
      });
    }
    fs.stat(filePathWrite[1], (err, stat) => {
      if (err) {
        console.log("invalid local path file. please try again");
        process.exit();
      }
      console.log(
        `download and saved ${stat["size"]}bytes to ${filePathWrite}`
      );
    });
  });
};
fetcher();
