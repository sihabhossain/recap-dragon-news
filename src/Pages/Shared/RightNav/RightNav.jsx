import React from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "../QZone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle></FaGoogle> Login with google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub></FaGithub> Login with github
      </Button>
      <div className="mt-4">
        <h4>Find Us on</h4>

        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> FaceBook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
