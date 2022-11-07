import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

function Wallet() {
  return (
    <Maincontainer>
      <Wrapper className="wrapper">
        <Imagecontainer>
          <Logoimg src={require("../assets/images/logo-wallet.png")} />
        </Imagecontainer>
        <Lists>
          <Items>
            <Itemlogo>
              <Img
                src={require("../assets/images/property-1=menu.svg").default}
              ></Img>
            </Itemlogo>
            <Itemtype>
              <Link to="/Dashboard"><Itemtitle>Dashboard</Itemtitle></Link>
            </Itemtype>
          </Items>
          <Items>
            <Itemlogo>
              <Img
                src={
                  require("../assets/images/property-1=credit-card.svg").default
                }
              ></Img>
            </Itemlogo>
            <Itemtype>
              <Link to="/mycard"><Itemtitle>My Cards</Itemtitle></Link>
            </Itemtype>
          </Items>
          <Items>
            <Itemlogo>
              <Img
                src={require("../assets/images/property-1=lock.svg").default}
              ></Img>
            </Itemlogo>
            <Itemtype>
              <Link to={"/Savings"}><Itemtitle>Savings</Itemtitle></Link>
            </Itemtype>
          </Items>
          <Items>
            <Itemlogo>
              <Img
                src={
                  require("../assets/images/property-1=transaction.svg").default
                }
              ></Img>
            </Itemlogo>
            <Itemtype>
              <Link to={"/Transaction"}><Itemtitle>Transaction</Itemtitle></Link>
            </Itemtype>
          </Items>
          <Items>
            <Itemlogo>
              <Img
                src={require("../assets/images/property-1=gear.svg").default}
              ></Img>
            </Itemlogo>
            <Itemtype>
              <Link to={"/Settings"}><Itemtitle>Settings</Itemtitle></Link>
            </Itemtype>
          </Items>
        </Lists>
      </Wrapper>
      <BottomItems>
        <Itemlogo>
          <Img src={require("../assets/images/rectangle.jpg")}></Img>
        </Itemlogo>
        <Itemtype>
          <Itemtitle>
            Jennifer <br /> Connectify
          </Itemtitle>
        </Itemtype>
        <Dot>
          <Img
            src={require("../assets/images/property-1=dot.svg").default}
          ></Img>
        </Dot>
      </BottomItems>
    </Maincontainer>
  );
}

export default Wallet;

const Maincontainer = styled.section`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f1f1f1;

  @media all and (max-width:768px){
    display: none;
  }
`;
const Wrapper = styled.div``;
const Imagecontainer = styled.h1`
  display: inline-block;
  width: 180px;

  @media all and (max-width: 980px) {
    width: 120px;
  }
`;
const Logoimg = styled.img`
  width: 100%;
  height: 100%;
`;
const Lists = styled.ul``;
const Items = styled.li`
  display: flex;
  padding-top: 20px;
  margin-left: 25px;
`;
const Itemlogo = styled.div``;
const Img = styled.img`
  width: 60%;

  @media all and (max-width: 1280px) {
    width: 70%;
  }
`;
const Itemtype = styled.div``;
const Itemtitle = styled.h3`
  color: #8e8e8e;
  margin-left: 10px;
  font-size: 15px;
  :hover {
    color: #000;
  }
  @media all and (max-width: 1280px) {
    font-size: 13px;
  }
`;
const Dot = styled.div`
  width: 50%;
  margin-left: 25%;
`;
const BottomItems = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-left: 30px;
  border-top: 1px solid #000;
  padding-top: 10px;

  @media all and (max-width: 980px) {
    display: none;
  }
`;
