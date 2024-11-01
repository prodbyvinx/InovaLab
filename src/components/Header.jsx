import './Header.css'
import * as Icon from 'react-bootstrap-icons'

function Header() {
    return (
        <>
            <header className="header">
                <div className="header-left">
                    <a href="#" className="home-icon"><Icon.HouseFill size='1.5em'/></a>
                </div>
                <div className="header-right">
                    <a href="" className="noti"><Icon.BellFill size='1.5em'/></a>
                    <a href="" className="cfg"><Icon.GearFill size='1.5em'/></a>
                </div>
            </header>
        </>
    );
}

export default Header;