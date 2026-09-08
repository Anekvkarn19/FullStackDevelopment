import Footer from "../components/Footer"
import Header from "../components/header"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
const UserLayout = () => {
  return (
    <div className="user-layout">
        <Header/>
        <Navbar/>
        <Home/>
        <Footer/>
      
    </div>
  )
}

export default UserLayout
