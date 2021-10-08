import axios from "axios";

export const requestToptal = () => {
  axios
    .post(
      "http://127.0.0.1:5000/",
      { cookie: "************************************" },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((res) => console.log({ res }))
    .catch((error) => console.error(error));
};
