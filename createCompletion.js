import { openai } from "./api.js";

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: "ada:ft-strugbits-2023-06-09-15-45-13",
      prompt: "My client is missing their ID card. Can they still file?",
      max_tokens: 100,
      // temperature: 0.2, // Adjust this value between 0 and 1
    });
    if (response.data) {
      // let rawOutput = generateResponse(prompt);  // This is where you call your model
      let processedOutput = await postProcess(response.data.choices[0].text);

      console.log("processedOutput: ", processedOutput);

      // console.log("choices: ", response.data.choices);
      // console.log("choices 0: ", response.data.choices[0].text);
    }
  } catch (err) {
    console.log("err: ", err);
  }
}

createCompletion();

function postProcess(text) {
  // // Split the text into sentences

  let sentences = text.split(".");
  // // Remove the last sentence if it's short (indicating it might be incomplete)

  if (
    sentences.length > 1 &&
    sentences[sentences.length - 1].slice(-1) !== "."
  ) {
    sentences.pop();
  }

  // // Join the sentences back together

  let processedText = sentences.join(".") + ".";

  return processedText;
}

// "ada:ft-strugbits-2023-05-29-15-10-48"  old model
