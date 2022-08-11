import React, { useEffect } from 'react';
import './styles/loginSign.css';
import axios from "axios"
import { useState } from "react"
import { Route, Routes } from 'react-router-dom';
import { LoginSignupPage } from './pages/LoginSignPage';
import { ProfilePage } from './pages/Profile';
import { LandingPage } from './pages/LandingPage';
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { DataPanelPage } from './pages/DataPAnelPage';
import { twkContext } from './Utils/TwkContext';
import { DigitalWalletPage } from './pages/DigitalWalletPage';
import { SignupPage } from './pages/SignupPage';

export function App() {
  const [users, setUsers] = useState([])
  const [Service, setService] = useState([])
  const [featuredService, setFeaturedService] = useState([])
  const [DataPanel, setDataPanel] = useState([])
  const [DigitalWallet, setDigitalWallet] = useState([])

  useEffect(() => {
    getUsers()
    getService()
    getDataPanel()
    getFeaturedService()
    getDigitalWallet()
  }, [])


  // ------------------ get Users ------------------
  const getUsers = async () => {
    const response = await axios.get("http://localhost:3002/users/users")
    setUsers(response.data)
    // console.log(Service);
  }

  // ------------- services -------------------------

  // ---------- get services -----------------
  const getService = async () => {
    const response = await axios.get("http://localhost:3002/service/services")
    setService(response.data)
    // console.log(Service);

  }
  // ----------------- get featured services ----------------------
  const getFeaturedService = async () => {
    const response = await axios.get("http://localhost:3002/service/featuredService")
    setFeaturedService(response.data)
  }



  // ---------- get datapanel -------------------
  const getDataPanel = async () => {
    const response = await axios.get("http://localhost:3002/datapanel/DataPanels")
    setDataPanel(response.data)
  }

  // ----------------- get Digital Wallet ------------------

  const getDigitalWallet = async () => {
    const response = await axios.get("http://localhost:3002/digitalWallet/DigitalWallet")
    setDigitalWallet(response.data)
  }


  const store = {
    users,
    Service,
    DataPanel,
    featuredService,
    DigitalWallet,
    ProfilePage,
    ServicePage,
    DataPanelPage,
    HomePage,
    DigitalWalletPage,

  }



  return (
    <twkContext.Provider value={store}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-up' element={<SignupPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginSignupPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/datapanel' element={<DataPanelPage />} />
        <Route path='/digitalwallet' element={<DigitalWalletPage />} />

      </Routes>
    </twkContext.Provider >
  )
}


export default App;
