// require("dotenv").config();
// const { Configuration, OpenAIApi } = require("openai");
// const openaiApiKey = "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";
// const configuration = new Configuration({ apikey: openaiApiKey });
// const openai = new OpenAIApi(configuration);
// const fs = require("fs");

import fs from "fs";
import { openai } from "./api.js";

async function upload() {
  try {
    const response = await openai.createFile(
      fs.createReadStream("./data/improvedData.jsonl"),
      "fine-tune"
    );
    console.log("File ID: ", response.data.id);
    fs.writeFileSync(
      "./fileId.js",
      `export const fileId = "${response.data.id}"`
    );
  } catch (err) {
    console.log("err: ", err);
  }
}

upload();
