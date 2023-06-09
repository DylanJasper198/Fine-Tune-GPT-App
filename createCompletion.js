import { openai } from "./api.js";

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: "davinci:ft-strugbits-2023-07-04-16-01-25",
      prompt: "Can I add on pro credit after the return is filed?",
      max_tokens: 50,
      temperature: 0.2, // Adjust this value between 0 and 1
    });
    if (response.data) {
      // let rawOutput = generateResponse(prompt);  // This is where you call your model
      let processedOutput = await postProcess(response.data.choices[0].text);
      let cleanResponse = await avoidRepeatation(processedOutput);
      console.log("cleanResponse: ", cleanResponse);

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

function avoidRepeatation(fineTuneResponse) {
  const sentences = fineTuneResponse.split(/[.?!]\s+/);

  const uniqueSentences = new Set();
  const result = [];

  for (const sentence of sentences) {
    if (!uniqueSentences.has(sentence)) {
      uniqueSentences.add(sentence);
      result.push(sentence);
    }
  }

  const cleanedResponse = result.join(". "); // Join the unique sentences back into a string
  return cleanedResponse;
}
// "ada:ft-strugbits-2023-05-29-15-10-48"  old model
