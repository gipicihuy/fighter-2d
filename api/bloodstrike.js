import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  const { user_id } = req.body;

  if (!user_id) {
    return res.status(400).json({
      success: false,
      message: "user_id required"
    });
  }

  try {
    const response = await axios.post(
      "https://kiosgameindonesia.com/api/nickname/validate",
      {
        category_id: "ce89bac4-e303-43df-aad3-3ac600ad527d",
        user_id: user_id,
        server_id: "Blood Strike"
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (response.data.statusCode === 201) {
      return res.json({
        success: true,
        game: {
          name: "Blood Strike",
          author: "givy"
        },
        account: {
          user_id: user_id,
          nickname: response.data.data,
          region: "GLOBAL"
        },
        checked_at: new Date().toISOString()
      });
    }

    return res.json({
      success: false,
      message: "Validation failed"
    });

  } catch (err) {
    return res.json({
      success: false,
      error: err.response?.data || err.message
    });
  }
}
