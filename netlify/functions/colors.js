exports.handler = async (event, context) => {
  setTimeout(() => {
    return { statusCode: 200, body: ["black", "blue", "green", "red", "white"] }, 3000 * Math.random();
  });
};
