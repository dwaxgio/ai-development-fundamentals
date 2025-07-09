const fetch = require("node-fetch");
const { OpenAIAPIKey } = require("./config");

class OpenAIAPI {
  static async generateResponse(userMessage, conversationHistory = []) {
    const apiKey = OpenAIAPIKey;
    console.log("Using OpenAI API Key:", apiKey); // Log the API key for debugging
    const endpoint = "https://api.openai.com/v1/chat/completions";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: conversationHistory.concat([
          { role: "user", content: userMessage },
        ]),
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:\n", errorText);
      return "Error comunicando con OpenAI.";
    }

    const responseData = await response.json();
    // Log the entire API response for debugging
    // console.log("Response from OpenAI API:", responseData.choices[0].message);
    // Check if choices array is defined and not empty
    if (
      responseData.choices &&
      responseData.choices.length > 0 &&
      responseData.choices[0].message
    ) {
      console.log("✅ OpenAI API response:", responseData.choices[0].message);
      return responseData.choices[0].message.content;
    } else {
      // Handle the case where choices array is undefined or empty
      console.error("Error: No valid response from OpenAI API");
      return "Sorry, I couldn't understand that.";
    }
  }
}
module.exports = { OpenAIAPI };
