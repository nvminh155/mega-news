import axios, { AxiosError, AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 50000,
  headers: { "Content-Type": "application/json" },
});

const handleError = (error: AxiosError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx

    return {
      reason_from: "response",
      error: error.response,
    };
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js

    return {
      reason_from: "The request was made but no response was received",
      error: error.request,
    };
  } else {
    // Something happened in setting up the request that triggered an Error

    return {
      reason_from:
        "Something happened in setting up the request that triggered an Error",
      error: error.message,
    };
  }
};

export const axiosApi = {
  get: async (url: string, config?: AxiosRequestConfig) => {
    return await instance
      .get(url, config)
      .then((res) => res.data)
      .catch(handleError);
  },
};


