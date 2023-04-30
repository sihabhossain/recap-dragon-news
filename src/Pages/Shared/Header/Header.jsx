import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-5">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Withour Fear Or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM  YYYY")}</p>
      </div>
      <div className="d-flex bg-secondary rounded text-white">
        <Button variant="danger">Latest</Button>
        <Marquee speed={100}>
          The Game of Thrones prequel, set almost 200 years before the events of
          the original series, was commissioned for a follow-up season shortly
          after its successful debut in 2021.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
