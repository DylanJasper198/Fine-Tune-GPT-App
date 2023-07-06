import { openai } from "./api.js";
// import { fileId } from "./fileId.js";

const fileId = "file-N0H9MaE5kvZXDnaiqyQjpL71";

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: fileId,
      model: "davinci",
    });
    console.log("response: ", response);
  } catch (err) {
    console.log("error: ", err.response.data.error);
  }
}

createFineTune();

// ft-MBIWJWQik1et0Pgxr3maMO8A
