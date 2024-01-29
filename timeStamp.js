const { writeFile, readFile, rm } = require("node:fs/promises");

var fileData;

async function createAndWriteDataIntoFile(curr_date = new Date()) {
  try {
    fileData = {
      date: curr_date.getDate(),
      hour: curr_date.getHours(),
      minutes: curr_date.getMinutes(),
    };
    await writeFile(
      `${fileData.date}-${fileData.hour}-${fileData.minutes}.txt`,
      curr_date.toString()
    );
  } catch (err) {
    console.error(err);
  }
}

createAndWriteDataIntoFile(new Date());

async function readDataFromFile() {
  try {
    const result = await readFile(
      `${fileData.date}-${fileData.hour}-${fileData.minutes}.txt`
    );
    console.log(result.toString());
  } catch (error) {
    console.log(error);
  }
}

readDataFromFile();

// async function removeFile(path = "") {
//   try {
//     const result = await rm(path);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// removeFile();
