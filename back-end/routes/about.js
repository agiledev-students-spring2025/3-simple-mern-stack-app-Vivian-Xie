const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        name: "Vivian Xie",
        bio: "Greetings! This is Vivian from Shanghai.",
        imageUrl: "http://localhost:7001/images/photo.jpg" // 或在线图片链接
    });
});

module.exports = router;
