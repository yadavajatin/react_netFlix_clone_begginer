import {Link} from "react-router-dom"
import {useState, useEffect} from "react"
import logo from "../../assets/images/logo_wordmark.png"
import NotificationsIcon from '@mui/icons-material/Notifications';
import FaceIcon from '@mui/icons-material/Face';
import "../css/navbar.css"

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const transactionNavbar = () => {
        if(window.scrollY > 100){
            setShowNavbar(true)
        }else{
            setShowNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transactionNavbar)
        return(() => {
            window.removeEventListener("scroll", transactionNavbar)
        })
    }, [])

    return (
        <>
            <div className={`navbar-container ${showNavbar && "navbar-black"}`}>
                <div className="navbar-contents">
                    <div className="navbar-left-component">
                        <div className="navbar-logo__wrapper">
                            <img src={logo} alt="netflix wordmark logo" className="navbar-logo cursor"/>
                        </div>

                        <div className="navbar-pageLinks__wrapper">
                            <ul className="navbar-pageLinks">
                                <li className="navbar-pageLinks__link"><Link to="/">Home</Link></li>
                                <li className="navbar-pageLinks__link"><Link to="/">TV Shows</Link></li>
                                <li className="navbar-pageLinks__link"><Link to="/">Movies</Link></li>
                                <li className="navbar-pageLinks__link"><Link to="/">New & Popular</Link></li>
                                <li className="navbar-pageLinks__link"><Link to="/">My List</Link></li>
                                <li className="navbar-pageLinks__link"><Link to="/">Browse by Language</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="navbar-right-component">
                        <div className="navbar-search">
                            <i className="fa-solid fa-magnifying-glass search-icon"></i>
                            <input
                                className="input navbar-input"
                                type="text"
                                placeholder="search "
                            />
                        </div>
                        <div className="navbar-right-component__linksWrapper">
                            <ul className="navbar-right-component__links">
                                <li><Link to="/">Kids</Link></li>
                                <li><Link to="/">DVD</Link></li>
                            </ul>
                        </div>
                        <div className="navbar-notifications__wrapper">
                            <NotificationsIcon className="navbar-notifications cursor"/>
                        </div>
                        <div className="navbar-acoount__wrapper">
                            <FaceIcon className="navbar-account cursor"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar