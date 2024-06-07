const fastify = require('fastify');
const axios = require('axios');
const cheerio = require('cheerio');

const app = fastify({
  logger: true,
});

const URL = 'https://neat-footprint-573871.framer.app/';

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return cheerio.load(response.data);
  } catch (error) {
    throw new Error('Error fetching the content');
  }
};

app.get('/', async (request, reply) => {
  try {
    const $ = await fetchData(URL);
    reply.type('text/html').send($.html());
  } catch (error) {
    reply.code(500).send(error.message);
  }
});

app.listen((err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server is running on ${address}`);
});
