const fetch = require('node-fetch'); // Используем библиотеку fetch для запросов

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).send('Please provide a URL to proxy.');
  }
  
  try {
    const response = await fetch(url);
    const body = await response.text();
    res.status(response.status).send(body);
  } catch (error) {
    res.status(500).send('Error fetching the URL');
  }
};
