const { Configuration, OpenAIApi } = require("openai");

const express = require("express");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
// export const openai = new OpenAIApi(configuration);

module.exports = {
  openai: new OpenAIApi(configuration),
};
