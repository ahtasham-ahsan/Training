const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        status: "UP",
        timestamp: new Date().toISOString(),
        message: "Health Check API Service!"
    });
});

module.exports = router;