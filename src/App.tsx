import React, { useEffect } from 'react';
import './styles/login.css';
import axios from "axios"
import { useState } from "react"
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/Profile';
import { LandingPage } from './pages/LandingPage';
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { DataPanelPage } from './pages/DataPAnelPage';
import { twkContext } from './Utils/TwkContext';
import { DigitalWalletPage } from './pages/DigitalWalletPage';
import { SignupPage } from './pages/SignupPage';
import { services } from './componant/date/serviceDate';
import { NotFoundPage } from './pages/notFound';

export function App() {
  const [users, setUsers] = useState([])
  const [profile, setProfile] = useState({})
  const [Service, setService] = useState([])
  const [ServiceFilter, setServiceFilter] = useState({})
  const [featuredService, setFeaturedService] = useState([])
  const [DataPanel, setDataPanel] = useState([])
  const [DigitalWallet, setDigitalWallet] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getUsers()
    getService()
    getDataPanel()
    getFeaturedService()
    getDigitalWallet()
  }, [])

  const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("userInfo")
    navigate('/login')
  }



  // ------------------ get Users ------------------
  const getUsers = async () => {
    const response = await axios.get("http://localhost:3002/users/users")
    setUsers(response.data)
    let userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
    setProfile(response.data.find((u: any) => u.user_id == userInfo.userId))
    // console.log(Service);
  }



  // ------------- services -------------------------

  const serviceSearch = (e: any) => {
    e.preventDefault()
    const form = e.target
    let servicesTitle = Service?.map((s: any) => s.service_title)
    let servicesFilter = Service?.filter((s: any) => s.service_title == form.elements.search.value)
    setService(servicesFilter)
  }
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
    profile,
    Service,
    DataPanel,
    featuredService,
    DigitalWallet,
    Logout,
    ProfilePage,
    ServicePage,
    DataPanelPage,
    HomePage,
    DigitalWalletPage,
    serviceSearch
  }



  return (
    <twkContext.Provider value={store}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-up' element={<SignupPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/datapanel' element={<DataPanelPage />} />
        <Route path='/digitalwallet' element={<DigitalWalletPage />} />
        <Route path='/*' element={<NotFoundPage />} />


      </Routes>
    </twkContext.Provider >
  )
}


export default App;
