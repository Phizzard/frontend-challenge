import ky from "ky";

export const fetchColours = async () => {
  const response = await ky.get(`${process.env.REACT_APP_API_URL}/colors`);

  return response.json();
};
