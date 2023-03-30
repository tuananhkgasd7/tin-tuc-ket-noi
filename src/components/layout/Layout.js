import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Layout = ({ props, children }) => {
  const navigate = useNavigate();
  const handlerBack = () =>{
    navigate(-1);
  };

  return (
    <div>
      <Header type={props?.type}/>
      <Container className={classes.container}>
        <Button className="my-3" variant="success" onClick={handlerBack}> Quay lại</Button>
        {children}
      </Container>
      {!(props?.type === 'admin') && <Footer />}
    </div>
  );
};

export default Layout;