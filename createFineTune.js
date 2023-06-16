import { openai } from "./api.js";
// import { fileId } from "./fileId.js";

const fileId = "file-QEADyVRyA6h6mvJIhJ0FX2b2";

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
