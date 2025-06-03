import axios from "axios";
import FormData from "form-data";
import userModel from "../models/user.model.js";

export async function generateImage(req, res) {
  try {
    const userId = req.user.id;
    const { prompt } = req.body;

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found!", status: false });
    }

    if (!prompt) {
      return res.status(400).json({ message: "Please enter something!", status: false });
    }

    if (user.creditBalance <= 0) {
      console.log("Out of credits!")
      return res.status(400).json({ message: "Out of credits!", status: false });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const response = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
      headers: {
        "x-api-key": process.env.CLICKDROP_API_KEY,
        ...formData.getHeaders(),
      },
      responseType: "arraybuffer",
    });

    const base64 = Buffer.from(response.data).toString("base64");
    const imageUrl = `data:image/png;base64,${base64}`;

    await userModel.findByIdAndUpdate(userId, {
      creditBalance: user.creditBalance - 1,
    });

    return res.status(200).json({
      message: "Image generated successfully",
      status: true,
      image: imageUrl,
      creditBalance: user.creditBalance - 1,
    });

  } catch (error) {
    console.error("Generation error:", error?.response?.data || error.message);
    return res.status(400).json({
      message: "Something went wrong",
      error: error?.response?.data?.error || error.message,
      status: false,
    });
  }
}
