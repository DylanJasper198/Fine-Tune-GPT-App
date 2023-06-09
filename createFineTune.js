import { openai } from "./api.js";
// import { fileId } from "./fileId.js";

const fileId = "file-afuXp7hSAUYjLirCEc4b8u5b";

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
