import axios from 'axios';

const KEY = process.env.MBTA_API_KEY;

export default axios.create({
  baseURL: 'https://api-v3.mbta.com'
});

