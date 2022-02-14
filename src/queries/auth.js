import ky from "ky";

export const signUp = async (body) => {
  const response = await ky.post(`${process.env.REACT_APP_API_URL}/submit`, {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const contentType = response.headers.get("content-type");

  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json();
  } else {
    return response.text();
  }
};
