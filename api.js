import { Configuration, OpenAIApi } from "openai";
// const openaiApiKey = process.env.OPENAI_KEY
// const openaiApiKey = "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"; // old
// const openaiApiKey = "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"; // old
// const openaiApiKey = "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"; // old
const openaiApiKey = "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"; // new
const configuration = new Configuration({
  apiKey: openaiApiKey,
});
export const openai = new OpenAIApi(configuration);
