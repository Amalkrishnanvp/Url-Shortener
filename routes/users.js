const express = require("express");
const router = express.Router();

const shortUrl = require("node-url-shortener");

/* POST shorten url. */
router.post("/", (req, res) => {
  console.log(req.body.longUrl);
  const longUrl = req.body.longUrl;

  shortUrl.short(longUrl, (err, url) => {
    console.log(url);

    if (err) {
      console.error(err);
    }

    res.status(200).json({ url });
  });
});

module.exports = router;
