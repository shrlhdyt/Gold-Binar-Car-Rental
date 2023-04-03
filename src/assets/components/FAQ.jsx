import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const FAQ = () => {
  return (
    <div>
      <div className="banner py-5" id="FAQ">
        <div className="card mb-3 mx-auto card-custom bg-primary text-light container text-center py-5 d-flex justify-content-center align-items-center flex-column">
          <h1 className="fw-bold">Sewa Mobil di (Lokasimu) Sekarang</h1>
          <p className="w-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <a href="" className="btn btn-success">
            Mulai Sewa Mobil
          </a>
        </div>
      </div>
      <div className="faq py-5" id="faq">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <h3>Frequently Asked Question</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-md-6">
              <Accordion flush>
                <Card className="mb-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <p>Apa saja syarat yang dibutuhkan?</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit arly consectetur adipisicing elit.
                        Voluptatibus eligendi deleniti in tenetur distinctio
                        repellendus ut quo dolorem dicta veniam!
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card className="mb-3">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <p>Berapa hari minimal sewa mobil lepas kunci?</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit arly consectetur adipisicing elit.
                        Voluptatibus eligendi deleniti in tenetur distinctio
                        repellendus ut quo dolorem dicta veniam!
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card className="mb-3">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <p>
                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                      </p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit arly consectetur adipisicing elit.
                        Voluptatibus eligendi deleniti in tenetur distinctio
                        repellendus ut quo dolorem dicta veniam!
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card className="mb-3">
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <p>Apakah Ada biaya antar-jemput?</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit arly consectetur adipisicing elit.
                        Voluptatibus eligendi deleniti in tenetur distinctio
                        repellendus ut quo dolorem dicta veniam!
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card className="mb-3">
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <p>Bagaimana jika terjadi kecelakaan?</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lorem ipsum dolor sit arly consectetur adipisicing elit.
                        Voluptatibus eligendi deleniti in tenetur distinctio
                        repellendus ut quo dolorem dicta veniam!
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
