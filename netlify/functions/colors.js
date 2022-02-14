exports.handler = async (event, context) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 200, body: JSON.stringify(["black", "blue", "green", "red", "white"]) }, 3000 * Math.random());
    });
  });
};
