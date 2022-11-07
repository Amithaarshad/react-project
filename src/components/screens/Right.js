import React from "react";
import styled from "styled-components";

function Right() {
  return (
    <Maincontainer>
      <Wrapper className="wrapper">
        <Topcontainer>
          <Searchcontainer>
            <Searchimg>
              <Image
                src={
                  require("../assets/images/property-1=Food-Site.svg").default
                }
              ></Image>
            </Searchimg>
            <Input placeholder="search document,keyword etc."></Input>
          </Searchcontainer>
        </Topcontainer>
        <Analytics>
          <Statitics>
            <RightAnalytics>Analytics</RightAnalytics>
            <LeftAnalytics>
              <IncomeAnalytic>Income</IncomeAnalytic>
              <SaveAnalytic>Savings</SaveAnalytic>
            </LeftAnalytics>
          </Statitics>
          <Graph>
            <Imagegraph
              src={require("../assets/images/graph.png")}
            ></Imagegraph>
          </Graph>
        </Analytics>
        <Transaction>
          <Toptrans>
            <Headingtrans>Transaction</Headingtrans>
            <Select>
              <Option>March 2022</Option>
              <Option>April 2022</Option>
              <Option>May 2022</Option>
              <Option>June 2022</Option>
            </Select>
          </Toptrans>
          <Transitem>
            <Translist>
              <Uparrow>
                <Upimage
                  src={
                    require("../assets/images/property-1=down-arrow.svg")
                      .default
                  }
                ></Upimage>
              </Uparrow>
              <Income>
                Monthly Groceries
                <br />
                <Date>3 April 2022 at 3.15 PM</Date>
              </Income>
              <Plus>+$2,20</Plus>
              <Dots>
                <Dotimg
                  src={require("../assets/images/property-1=dot.svg").default}
                ></Dotimg>
              </Dots>
            </Translist>
            <Translist>
              <Uparrow>
                <Upimage
                  src={
                    require("../assets/images/property-1=up-arrow.svg").default
                  }
                ></Upimage>
              </Uparrow>
              <Income>
                Zabka Cashback
                <br />
                <Date>3 April 2022 at 3.15 PM</Date>
              </Income>
              <Plusone>+$220</Plusone>
              <Dots>
                <Dotimage
                  src={require("../assets/images/property-1=dot.svg").default}
                ></Dotimage>
              </Dots>
            </Translist>
            <Translist>
              <Uparrow>
                <Upimage
                  src={
                    require("../assets/images/property-1=up-arrow.svg").default
                  }
                ></Upimage>
              </Uparrow>
              <Income>
                Transfer to card
                <br />
                <Date>3 April 2022 at 3.15 PM</Date>
              </Income>
              <Plustwo>+$80</Plustwo>
              <Dots>
                <Dotsimg
                  src={require("../assets/images/property-1=dot.svg").default}
                ></Dotsimg>
              </Dots>
            </Translist>
          </Transitem>
        </Transaction>
      </Wrapper>
    </Maincontainer>
  );
}

export default Right;

const Maincontainer = styled.section`
  width: 43%;

  @media all and (max-width: 768px) {
    width: 50%;
  }
  @media all and (max-width: 640px) {
    width: 100%;
  }
`;
const Wrapper = styled.section``;
const Topcontainer = styled.div``;
const Searchcontainer = styled.div`
  border: 1px solid #8e8e8e;
  padding-left: 10px;
  margin: 5px;
  height: 45px;
  display: flex;
`;
const Searchimg = styled.div`
  display: inline-block;
  width: 25px;
  color: #8e8e8e;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Input = styled.input`
  width: 80%;
  margin-left: 10px;
`;
const Analytics = styled.section`
  box-shadow: 0 0 40px -25px rgb(0 0 0 / 65%);
  margin-top: 55px;
  padding: 20px;
  border-radius: 10px;
`;
const Statitics = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  margin-bottom: 20px;
`;
const RightAnalytics = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;
const LeftAnalytics = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;

  @media all and (max-width: 768px) {
    font-size: 10px;
  }
`;
const IncomeAnalytic = styled.div`
  margin-right: 40px;

  @media all and (max-width: 768px) {
    margin-right: 20px;
  }
`;
const SaveAnalytic = styled.div``;
const Graph = styled.div`
  display: inline-block;
  height: 270px;
  width: 100%;
  padding-top: 9px;

  @media all and (max-width: 1280px) {
    height: 230px;
    margin-bottom: 13px;
  }
  @media all and (max-width: 768px) {
    height: 170px;
  }
`;
const Imagegraph = styled.img`
  width: 100%;
  height: 100%;
`;
const Transaction = styled.section`
  box-shadow: 0 0 15px -11px rgb(0 0 0 / 70%);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  height: 293px;

  @media all and (max-width: 1280px) {
    height: 292px;
    padding: 8px;
    margin-bottom: 5px;
  }
`;
const Toptrans = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Headingtrans = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;
const Select = styled.select`
  border: 1px solid #8e8e8e;
  border-radius: 20px;
  color: #8e8e8e;
  padding: 5px;
  width: 30%;
  font-size: 15px;

  @media all and (max-width: 1050px) {
    font-size: 12px;
  }
  @media all and (max-width: 768px) {
    font-size: 8px;
  }
  @media all and (max-width: 640px) {
    font-size: 13px;
  }
  @media all and (max-width: 480px) {
    font-size: 10px;
  }
`;
const Option = styled.option``;
const Translist = styled.li`
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-evenly;
  height: 65px;
`;
const Transitem = styled.ul``;
const Uparrow = styled.div``;
const Upimage = styled.img`
  background-color: #000;
  padding: 10px;
  border-radius: 6px;

  @media all and (max-width: 1050px) {
    padding: 5px;
  }
`;
const Income = styled.div`
  width: 45%;
  font-size: 19px;
  font-weight: bold;
  line-height: 1;

  @media all and (max-width: 1050px) {
    font-size: 15px;
  }
  @media all and (max-width: 980px) {
    font-size: 14px;
  }
`;
const Date = styled.span`
  font-size: 10px;
`;
const Plus = styled.div`
  width: 20%;
`;
const Plusone = styled.div`
  width: 20%;
`;
const Plustwo = styled.div`
  width: 20%;
`;
const Dots = styled.div`
  display: inline-block;
`;
const Dotimg = styled.img`
  width: 100%;
  height: 100%;
`;
const Dotimage = styled.img`
  width: 100%;
  height: 100%;
`;
const Dotsimg = styled.img`
  width: 100%;
  height: 100%;
`;
