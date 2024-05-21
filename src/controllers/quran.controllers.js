const axios = require('axios');

const getChapters = async (req, res) => {
  try {
    const response = await axios.get('https://api.quran.com/api/v4/chapters');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chapters', error });
  }
};

const getVersesByChapter = async (req, res) => {
  const { chapterId } = req.params;
  try {
    const response = await axios.get(`https://api.quran.com/api/v4/verses/by_chapter/${chapterId}`, {
      params: {
        words: true,
        translation_fields: 'resource_name,language_id',
        per_page: 10,
        fields: 'text_uthmani,chapter_id,hizb_number,text_imlaei_simple',
        translations: '131,85',
        reciter: 7,
        word_translation_language: 'en',
        page: 1,
        word_fields: 'verse_key,verse_id,page_number,location,text_uthmani,code_v1,qpc_uthmani_hafs',
        mushaf: 2
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching verses', error });
  }
};

module.exports = {
  getChapters,
  getVersesByChapter
};
