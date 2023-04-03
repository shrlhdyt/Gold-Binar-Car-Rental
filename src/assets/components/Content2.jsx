import React from "react";
import bg from "../Image/bg.png";

export const Content2 = () => {
  return (
    <div className="header main-section pt-5 pt-sm- pt-md-0">
      <div className="container h-100 d-flex pt-md-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col md-5">
            <h1>Sewa & Rental Mobil Terbaik di Kawasan lokasimu</h1>
            <p className="deskripsi">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </div>
          <div className="mobil col-md-6">
            <img className="w-100" alt="bg" src={bg} />
          </div>
        </div>
      </div>
    </div>
  );
};
