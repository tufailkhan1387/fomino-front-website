import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Utils/urls";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    var header_config = {
      headers: {
        accessToken: localStorage.getItem("BearerToken"),
      },
    };
    setLoading(true);
    const fetchData = () => {
      axios.get(BASE_URL + url, header_config).then((dat) => {
        setData(dat.data);
      });
    };
    fetchData();
    setLoading(false);
  }, [url]);

  const reFetch = async () => {
    var header_config = {
      headers: {
        accessToken: localStorage.getItem("BearerToken"),
      },
    };
    setLoading(true);
    try {
      axios.get(BASE_URL + url, header_config).then((dat) => {
        setData(dat.data);
      });
    } catch (err) {}
    setLoading(false);
  };

  return { data, loading, reFetch };
};

export default useFetch;
