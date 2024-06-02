import { GoogleGenerativeAI } from "@google/generative-ai";

const talkToGemini = async (req, res) => {
  try {
    const { message, history } = req.body;
    console.log(message);
    console.log("history start")
    console.log(history)
    console.log("history end")

    // Check for empty message
    if (!message) {
      return res.status(400).json({ message: "Please enter a message." });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // doc
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: process.env.USER_TEXT }],
        },
        {
          role: "model",
          parts: [{ text: process.env.AI_TEXT }],
        },
        {
          role: "user",
          parts: [{ text: process.env.USER_CATCH_TEXT }],
        },
        {
          role: "model",
          parts: [{ text: process.env.AI_MISTAKE_TEXT }],
        },
        {
          role: "user",
          parts: [{ text: process.env.USER_CORRECT_TEXT }],
        },
        {
          role: "model",
          parts: [{ text: process.env.AI_CORRECT_TEXT }],
        },
      ].concat(history),
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });
    const msg = message;

    const result = await chat.sendMessage(msg);
    const response = result.response;
    const text = response.text();

    return res.status(200).json({
      message: text,
    });
  } catch (error) {
    console.log(error)
  }
};

export { talkToGemini };
