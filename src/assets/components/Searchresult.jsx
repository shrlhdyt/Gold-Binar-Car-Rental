import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const API_URL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";
const PRICE_OPTION = {
  small: {
    maxPrice: 400000,
  },
  medium: {
    minPrice: 400000,
    maxPrice: 600000,
  },
  large: {
    minPrice: 600000,
  },
};

const SearchResult = () => {
  const [resulData, setResultData] = useState([]);

  const location = useLocation();
  const { name } = location.state;
  const { category } = location.state;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(API_URL, {
        params: {
          name,
          category,
        },
      });
      setResultData(response.data.cars);
    };

    fetchData();
  });
  return (
    <div>
      <div className="Search" id="search-result">
        <h1 className="col mt-5 d-flex justify-content-center text-dark">
          search Result
        </h1>
      </div>
    </div>
  );
};

export default SearchResult;
