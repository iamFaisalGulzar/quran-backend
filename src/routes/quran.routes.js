const express = require('express');
const { getChapters, getVersesByChapter } = require('../controllers/quran.controllers');
const {verifyJWT} = require("../middleware/auth.middleware.js")

const router = express.Router();

router.get('/chapters', verifyJWT, getChapters);
router.get('/chapters/:chapterId/verses', verifyJWT, getVersesByChapter);

module.exports = router;
