import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ContentSection from './components/contentSection/ContentSection'
import PasswordSection from './components/passwordSection/PasswordSection'
import { useState } from 'react'
function App() {
  const [tab,setTab] = useState("main")

  return (
    <>
      {tab === "main" && <>
      <Header onChange={setTab}/>
      <ContentSection/> 
      <Footer/></>}
      
      {tab === "login" && <PasswordSection onChange={setTab}/>}
    </>
  )
}

export default App