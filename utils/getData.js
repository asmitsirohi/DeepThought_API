const axios = require("axios");

const getData = async (type) => {
  let data;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${type}`
    );

    data = response.data;
  } catch (error) {
    data = error;
  } finally {
    return data;
  }
};

module.exports = getData;
