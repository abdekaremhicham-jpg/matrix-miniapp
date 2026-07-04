const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/download", (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "الرابط مطلوب" });
  }

  exec(`yt-dlp -g "${url}"`, (err, stdout) => {
    if (err) {
      return res.status(500).json({
        error: "فشل استخراج رابط الفيديو"
      });
    }

    res.json({
      success: true,
      download: stdout.trim()
    });
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
