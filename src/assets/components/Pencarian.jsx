import { useState } from "react";
import TextField from "../components/TextField";
import Select from "../components/Select";
import {
  catOptions,
  hargaOptions,
  statusOptions,
} from "../components/Constants";
import { Button, Spinner } from "reactstrap";

const apiCarURL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car"; //api untuk search mobil dari BE data server

const Pencarian = () => {
  const [valueCategory, setCategory] = useState("");
  const [valueHarga, setHarga] = useState("");
  const [valueStatus, setStatus] = useState("");
  const [valueNamaMobil, setNamaMobil] = useState("");
  const [listCars, setListCars] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log({ listCars });

  const handleOnClick = () => {
    setLoading(true);
    fetch(
      apiCarURL +
        "?" +
        new URLSearchParams({
          name: valueNamaMobil,
          category: valueCategory,
          isRented: valueStatus,
          minPrice: valueHarga,
          page: 1,
          pageSize: 10,
        })
    )
      .then((res) => res.json())
      .then((resp) => {
        const dataCar = resp.cars;
        setListCars(dataCar);
        setLoading(false);
      });
  };

  const handlePilihMobil = (param) => {
    push(`/cari-mobil/${param}`);
  };

  return (
    <div style={{ margin: "32px" }}>
      <TextField
        labelValue={"Nama Mobil"}
        value={valueNamaMobil}
        onChange={setNamaMobil}
      />
      <Select
        labelValue={"Kategori"}
        items={catOptions}
        onChange={setCategory}
        value={valueCategory}
      />
      <Select
        labelValue={"Harga"}
        items={hargaOptions}
        onChange={setHarga}
        value={valueHarga}
      />
      <Select
        labelValue={"Status"}
        items={statusOptions}
        onChange={setStatus}
        value={valueStatus}
      />

      <Button
        color="primary"
        onClick={handleOnClick}
        type="button"
        name=""
        id=""
        className="btn btn-primary btn-lg btn-block"
      >
        {loading ? (
          <>
            <Spinner size="sm">Loading...</Spinner>
            <span> Loading</span>
          </>
        ) : (
          <>Cari Mobil</>
        )}
      </Button>

      <br />
      <hr />

      <div>
        <h3>Result</h3>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {listCars.map(({ id, image, name, price }) => {
            return (
              <div className="card">
                <div style={{ width: "270px", height: "auto" }}>
                  <img
                    className="card-img-top"
                    width="100%"
                    height="auto"
                    src={image}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{name}</h4>
                  <p className="card-text">{price}</p>
                </div>

                <Button
                  onClick={() => handlePilihMobil(id)}
                  style={{
                    margin: "1em",
                    backgroundColor: "#5CB85F",
                    border: "none",
                    borderRadius: "2px",
                  }}
                >
                  Pilih Mobil
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pencarian;
