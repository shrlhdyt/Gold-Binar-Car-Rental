import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import jempol from "../Image/jempol.png";
import Harga from "../Image/Harga.png";
import Hijau from "../Image/Hijau.png";
import Jam from "../Image/Jam.png";

const Whyus = () => {
  return (
    <div>
      <section className="ms-md-11" id="Whyus">
        <div className="container mt-5">
          <div className="row ms-13 d-flex p-4">
            <div>
              <h2>Why Us?</h2>
            </div>
            <div className="d-flex p-4">
              <p>Mengapa harus pilih Binar Car Rental?</p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="card col-3 third-card-item sm">
              <div className="card-body">
                <img src={jempol} alt="" />
                <h5 className="card-title pt-3 third-card-title">
                  Mobil Lengkap
                </h5>
                <p className="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
            <div className="card col-3 third-card-item ">
              <div className="card-body card-body-whyus">
                <img src={Harga} alt="" />
                <h5 className="card-title pt-3 third-card-title">
                  Harga Murah
                </h5>
                <p className="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
            <div className="card col-3 third-card-item ">
              <div className="card-body card-body-whyus">
                <img src={Jam} alt="" />
                <h5 className="card-title pt-3 third-card-title">
                  Layanan 24 Jam
                </h5>
                <p className="card-text">
                  Siap melayani kebutuhan anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
            <div className="card col-3 third-card-item ">
              <div className="card-body card-body-whyus">
                <img src={Hijau} alt="" />
                <h5 className="card-title pt-3 third-card-title">
                  Sopir Professional
                </h5>
                <p className="card-text">
                  Sopir yang Profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whyus;
