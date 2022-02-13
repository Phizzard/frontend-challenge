import ky from "ky";

export const fetchColours = async () => {
  const response = await ky.get("http://localhost:3001/api/colors");

  return response.json();
};
