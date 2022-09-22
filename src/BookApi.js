import axios from "axios";

export const bookdata = () => {
  return axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers")
    .then((response) => response);
}