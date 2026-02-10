const express = require('express');
const router = express.Router();

router.get('/stats', (req, res) => {
    res.json({ success: true, stats: { users: 150, tools: 12, campusClubs: 8 } });
});

module.exports = router;
