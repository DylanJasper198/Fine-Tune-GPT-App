import { openai } from "./api.js";
// import { fileId } from "./fileId.js";

const fileId = "file-MGaj3VuRSYyf4cM45AjJoZu4";

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: fileId,
      model: "ada",
    });
    console.log("response: ", response);
  } catch (err) {
    console.log("error: ", err.response.data.error);
  }
}

createFineTune();

// ft-MBIWJWQik1et0Pgxr3maMO8A
