import axios from "axios";

const ACCESS_KEY = "keROiOoPRBTtA2JzYYy0OQCIs0O0YyVlgTqdL-9q8Pc";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Accept-Version"] = "v1";
axios.defaults.headers.common["Authorization"] = `Client-ID ${ACCESS_KEY}`;

export const fetchImage = async (searchQuery, currentPage) => {
  const response = await axios.get("/photos", {
    params: {
      query: searchQuery,
      per_page: 10,
      page: currentPage,
    },
  });
  return response.data;
};
