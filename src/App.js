import React from "react";
import styled from "styled-components";
import Dashboard from "./components/screens/Dashboard";
import Right from "./components/screens/Right";
import "./App.css";
import Wallet from "./components/screens/Wallet";
<<<<<<< HEAD
=======
import CardsNotWorking from "./components/PathFolder/CardsNotWorking";
import SavingNoWorking from "./components/PathFolder/SavingNoWorking";
import SearchOops from "./components/PathFolder/SearchOops";
import SettingNotWorking from "./components/PathFolder/SettingNotWorking";
import TransationNotWorking from "./components/PathFolder/TransationNotWorking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from '../src/components/Preloader/Preloader'

>>>>>>> aace9b7 (final push)
function App() {
  return (
    <>
      <Container>
<<<<<<< HEAD
        <Wallet />
        <Dashboard />
        <Right />
=======
        <Preloader/>
        <Router>
          <Routes>
            <Route path={"/"} element={[<Wallet />, <Dashboard />, <Right />]} />
            <Route path={"/Dashboard"} element={[<Wallet />, <Dashboard />, <Right />]} />
            <Route path={"/mycard"} element={[<Wallet />, <CardsNotWorking />, <Right />]} />
            <Route path={"/Savings"} element={[<Wallet />, <SavingNoWorking />, <Right />]} />
            <Route path={"*"} element={<SearchOops />} />
            <Route path={"/Settings"} element={[<Wallet />, <SettingNotWorking />, <Right />]} />
            <Route path={"/Transaction"} element={[<Wallet />, <TransationNotWorking />, <Right />]} />
          </Routes>
        </Router>
>>>>>>> aace9b7 (final push)
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100%;

  @media all and (max-width: 640px) {
    flex-wrap: wrap;
  }
`;
