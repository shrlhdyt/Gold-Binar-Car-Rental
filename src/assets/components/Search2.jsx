import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";

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

const Search2 = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState({});
  const [isRented, setIsRented] = useState("");
  const [resultData, setResultData] = useState([]);

  const handleClick = async () => {
    console.log("Nama: ", name);
    console.log("Category: ", category);
    console.log("Price: ", price);
    console.log("Is Rented: ", isRented);

    const getPrice = PRICE_OPTION[price];

    const response = await axios.get(API_URL, {
      params: {
        name,
        category,
        ...getPrice,
        isRented,
      },
    });

    setResultData(response.data.cars);
  };

  return (
    <div style={{ padding: 100 }}>
      <Label for="nama">Nama Mobil</Label>
      <Input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        id="nama"
        placeholder="Ketik nama/tipe mobil"
      />
      <Label for="kategori">Kategori</Label>
      <Input
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        id="kategori"
        placeholder="Masukan Kapasitas Mobil"
        type="select"
      >
        <option hidden label="Masukan Kapasitas Mobil" value="" />
        <option label="2 - 4 orang" value="small" />
        <option label="4 - 6 orang" value="medium" />
        <option label="6 - 8 orang" value="large" />
      </Input>
      <Label for="harga">Harga</Label>
      <Input
        value={price}
        id="harga"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        placeholder="Masukan Harga Sewa per Hari"
        type="select"
      >
        <option hidden label="Masukan Harga Sewa per Hari" value="" />
        <option value="small">{"<"} Rp. 400.000</option>
        <option value="medium">Rp. 400.000 - Rp. 600.000</option>
        <option value="large">{">"} Rp. 600.000</option>
      </Input>
      <Label for="status">Status</Label>
      <Input
        value={isRented}
        onChange={(e) => {
          setIsRented(e.target.value);
        }}
        id="status"
        placeholder="Disewa"
        type="select"
      >
        <option hidden label="Disewa" value="" />
        <option value={true}>Disewakan</option>
        <option value={false}>Tidak Disewakan</option>
      </Input>
      <Button color="success">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/search-result"
          state={{ name, category, price, isRented }}
        >
          Cari Mobil
        </Link>
      </Button>
      <hr />
      {resultData.map((car) => (
        <div key={car.id}>
          <img src={car.image} alt={car.name} />
          <div>{car.name}</div>
          <div>{car.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Search2;
