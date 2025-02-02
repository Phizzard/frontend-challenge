exports.handler = async (event, context) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { name, email, password, color, terms } = JSON.parse(event.body);

      if (name && email && password && color && terms && name !== "Error") {
        resolve({
          statusCode: 200,
        });
      } else {
        resolve({
          statusCode: 400,
          body: JSON.stringify({
            error: "All fields are mandatory and the agreement must be accepted",
          }),
        });
      }
    }, 3000 * Math.random());
  });
};
