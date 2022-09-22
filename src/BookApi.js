import axios from "axios";

export const bookdata = () => {
  axios.defaults.headers['X-API-KEY'] = 'AIzaSyAvm5gaFT75cYTXdirFP3QPu_1sHGMkufk';
  return axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor")
    .then((response) => response);
}