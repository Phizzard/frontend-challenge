exports.handler = async (event, context) => {
  setTimeout(() => {
    const { name, email, password, color, terms } = req.body;
    if (name && email && password && color && terms && name !== "Error") {
      return {
        statusCode: 200,
      };
    } else {
      return {
        statusCode: 400,
        body: { error: "All fields are mandatory and the agreement must be accepted", body: { name, email, password, color, terms } },
      };
    }
  }, 3000 * Math.random());
};
