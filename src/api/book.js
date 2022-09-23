import axios from "axios";

const fetchBooksByQuery = (requiredParams, additionalParams) => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${requiredParams}${additionalParams}&printType=books`
    )
    .then((response) => response.data);
};

const fetchBookById = (id) => {
  return axios
    .get("https://www.googleapis.com/books/v1/volumes/" + id)
    .then((response) => response.data);
};

export { fetchBooksByQuery, fetchBookById };
