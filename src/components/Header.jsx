import './Header.css'
import * as Icon from 'react-bootstrap-icons'

function Header() {
    return (
        <>
            <header className="header">
                <div className="header-left">
<<<<<<< HEAD
                    <span>InovaLab</span>
                    <a href="#" className="home-icon"><Icon.House size='1em'/></a>
                </div>
                <div className="header-right">
                    <a href="" className="noti"><Icon.Bell size='1em'/></a>
                    <a href="" className="cfg"><Icon.Gear size='1em'/></a>
=======
                    <a href="#" className="home-icon"><Icon.HouseFill size='1.5em'/></a>
                </div>
                <div className="header-right">
                    <a href="" className="noti"><Icon.BellFill size='1.5em'/></a>
                    <a href="" className="cfg"><Icon.GearFill size='1.5em'/></a>
>>>>>>> a14db5902baa2c8b32ae724ee70f698309a0e1d9
                </div>
            </header>
        </>
    );
}

export default Header;