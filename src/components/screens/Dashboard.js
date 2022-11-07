import React from "react";
import styled from "styled-components";

function Dashboard() {
  return (
    <Maincontainer>
      <Wrapper className="wrapper">
        <Container>
          <Head>Dashboard</Head>
          <Items>
            <Item>
              <Itemtitle>Available Amount</Itemtitle>
              <Itemamount>$6,550</Itemamount>
            </Item>
            <Item>
              <Itemtitle>Card balance</Itemtitle>
              <Itemamount>$4,208</Itemamount>
            </Item>
            <Item>
              <Itemtitle>Credit Limit</Itemtitle>
              <Itemamount>$20,000</Itemamount>
            </Item>
          </Items>
        </Container>
        <Subcontainer>
          <Main>
            <Title>Savings</Title>
            <Left>Total 5 wallets</Left>
          </Main>
          <Itemlist>
            <Itemtype style={{ backgroundColor: "#fec0a7" }}>
              <Itemhead>
                <Img
                  src={require("../assets/images/property-1=sun 1.svg").default}
                ></Img>
              </Itemhead>
              <Itemnum>$2250</Itemnum>
              <Itemname>Summer Trip</Itemname>
            </Itemtype>
            <Itemtype style={{ backgroundColor: "#98bee5" }}>
              <Itemhead>
                <Img
                  src={require("../assets/images/property-1=fire.svg").default}
                ></Img>
              </Itemhead>
              <Itemnum>$2250</Itemnum>
              <Itemname>Summer Trip</Itemname>
            </Itemtype>
            <Itemtype style={{ backgroundColor: "#98dbe4" }}>
              <Itemhead>
                <Img
                  src={
                    require("../assets/images/property-1=console.svg").default
                  }
                ></Img>
              </Itemhead>
              <Itemnum>$2250</Itemnum>
              <Itemname>Summer Trip</Itemname>
            </Itemtype>
          </Itemlist>
        </Subcontainer>
        <Statics>
          <Topcontainer>
            <Headingstatic>Statitics</Headingstatic>
            <Select>
              <Option>March 2022</Option>
              <Option>April 2022</Option>
              <Option>May 2022</Option>
              <Option>June 2022</Option>
            </Select>
          </Topcontainer>
          <Staticitem>
            <Staticlist>
              <Uparrow>
                <Upimage
                  src={
                    require("../assets/images/property-1=up-arrow.svg").default
                  }
                ></Upimage>
              </Uparrow>
              <Income>
                Total Income
                <br />
                <Amount>$235</Amount>
              </Income>
              <Rangeone>
                <Colorblue></Colorblue>
                <Backgroundimg>
                  <Graphimg
                    src={require("../assets/images/graph1.png")}
                  ></Graphimg>
                </Backgroundimg>
              </Rangeone>
              <Plus>+20%</Plus>
            </Staticlist>
            <Staticlist>
              <Uparrow>
                <Upimage
                  src={
                    require("../assets/images/property-1=up-arrow.svg").default
                  }
                ></Upimage>
              </Uparrow>
              <Income>
                Total Income
                <br />
                <Amount>$235</Amount>
              </Income>
              <Rangetwo>
                <Colorgreen></Colorgreen>
                <Backgroundimg>
                  <Graphimg
                    src={require("../assets/images/graph1.png")}
                  ></Graphimg>
                </Backgroundimg>
              </Rangetwo>
              <Plus>+8%</Plus>
            </Staticlist>
            <Staticlist>
              <Uparrow>
                <Upimage
                  src={
                    require("../assets/images/property-1=down-arrow.svg")
                      .default
                  }
                ></Upimage>
              </Uparrow>
              <Income>
                Total Income
                <br />
                <Amount>$235</Amount>
              </Income>
              <Rangethree>
                <Colorpink></Colorpink>
                <Backgroundimg>
                  <Graphimg
                    src={require("../assets/images/graph1.png")}
                  ></Graphimg>
                </Backgroundimg>
              </Rangethree>
              <Plus>-18%</Plus>
            </Staticlist>
          </Staticitem>
        </Statics>
      </Wrapper>
    </Maincontainer>
  );
}

export default Dashboard;

const Maincontainer = styled.section`
  margin-left: 10px;
  width: 40%;

  @media all and (max-width: 768px) {
    width: 50%;
  }
  @media all and (max-width: 640px) {
    width: 100%;
  }
`;

const Wrapper = styled.div``;
const Container = styled.div`
  margin-bottom: 20px;
`;
const Head = styled.h1`
  font-size: 30px;
  margin-left: 15px;
  padding-top: 20px;
  font-weight: bold;

  @media all and (max-width: 980px) {
    padding-top: 10px;
  }
`;
const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  background-color: #000;
  color: #fff;
  padding: 20px 20px 20px 20px;
  border-radius: 8px;
`;
const Item = styled.li`
  margin-left: 18px;
  width: 30%;
  border-right: 1px solid;

  &:last-child {
    border: none;
    width: 15%;
  }
`;
const Itemtitle = styled.li`
  font-size: 12px;

  @media all and (max-width: 1280px) {
    font-size: 10px;
  }
  @media all and (max-width: 980px) {
    font-size: 7px;
  }
`;
const Itemamount = styled.div`
  font-size: 22px;
  padding-top: 10px;

  @media all and (max-width: 1050px) {
    font-size: 20px;
  }
  @media all and (max-width: 980px) {
    font-size: 15px;
  }
`;
const Subcontainer = styled.section`
  box-shadow: 0 0 15px -11px rgb(0 0 0 / 70%);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;

  @media all and (max-width: 768px) {
    margin-bottom: 35px;
  }
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.h3`
  font-size: 13px;
  text-decoration: underline;
  color: #8e8e8e;
  margin-right: 20px;
`;
const Itemlist = styled.ul`
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-right: 14px;
  /* width: 80%; */
  margin-left: 20px;

  @media all and (max-width: 1380px) {
    margin-left: 15px;
  }
`;
const Itemtype = styled.li`
  border-radius: 10px;
  padding: 20px 40px 20px 40px;
  padding-left: 16px;

  @media all and (max-width: 1380px) {
    padding-left: 10px;
  }
  @media all and (max-width: 1280px) {
    padding-left: 5px;
    padding: 8px 18px 18px 8px;
  }
  @media all and (max-width: 1050px) {
    padding: 6px 15px 15px 6px;
  }
  @media all and (max-width: 980px) {
    padding: 2px 10px 10px 2px;
  }
  @media all and (max-width: 640px) {
    padding: 15px 30px 15px 30px;
  }
  @media all and (max-width: 480px) {
    padding: 8px 12px 12px 8px;
  }
`;
const Itemhead = styled.div`
  width: 20px;

  @media all and (max-width: 980px) {
    width: 15px;
  }
`;
const Img = styled.img`
  width: 100%;
`;
const Itemnum = styled.div`
  font-size: 25px;
  padding-top: 10px;
  font-weight: bold;

  @media all and (max-width: 1380px) {
    font-size: 20px;
    padding-top: 7px;
  }
  @media all and (max-width: 980px) {
    font-size: 15px;
  }
`;
const Itemname = styled.div`
  font-size: 12px;
  font-weight: 600;

  @media all and (max-width: 980px) {
    font-size: 9px;
  }
`;
const Statics = styled.section`
  box-shadow: 0 0 15px -11px rgb(0 0 0 / 70%);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;

  @media all and (max-width: 980px) {
    margin-bottom: 22px;
  }
`;
const Topcontainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Headingstatic = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Select = styled.select`
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  color: #8e8e8e;
  padding: 5px;
  width: 33%;
  font-size: 15px;

  @media all and (max-width: 1050px) {
    font-size: 12px;
  }
  @media all and (max-width: 768px) {
    font-size: 10px;
  }
  @media all and (max-width: 640px) {
    font-size: 13px;
  }
  @media all and (max-width: 480px) {
    font-size: 10px;
  }
`;
const Option = styled.option``;
const Staticitem = styled.div``;
const Staticlist = styled.div`
  display: flex;
  margin-top: 23px;
`;
const Uparrow = styled.div``;
const Upimage = styled.img`
  background-color: #000;
  padding: 10px;
  border-radius: 6px;

  @media all and (max-width: 1350px) {
    padding: 21px;
  }
  @media all and (max-width: 1280px) {
    padding: 6px;
  }
`;
const Income = styled.div`
  font-size: 10px;
  margin-left: 20px;

  @media all and (max-width: 980px) {
    font-size: 8px;
  }
`;
const Amount = styled.span`
  font-size: 25px;
  font-weight: 600;

  @media all and (max-width: 980px) {
    font-size: 18px;
  }
`;
const Rangeone = styled.div`
  display: flex;
  margin-left: 15px;
  height: 35px;
`;
const Rangetwo = styled.div`
  display: flex;
  margin-left: 15px;
  height: 35px;
`;
const Rangethree = styled.div`
  display: flex;
  margin-left: 15px;
  height: 35px;
`;
const Colorblue = styled.div`
  width: 54%;
  background-color: #98bee5;
`;
const Backgroundimg = styled.div`
  width: 46%;
  display: inline-block;
`;
const Graphimg = styled.img`
  width: 100%;
  height: 100%;
`;
const Plus = styled.div`
  margin-left: 15px;
`;
const Colorgreen = styled.div`
  width: 27%;
  background-color: #98dbe4;
`;
const Colorpink = styled.div`
  width: 43%;
  background-color: #fec0a7;
`;
