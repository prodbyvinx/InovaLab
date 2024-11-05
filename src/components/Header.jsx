import './Header.css'
import * as Icon from 'react-bootstrap-icons'

function Header() {
    return (
        <>
            <header className="header">
                <div className="header-left">
                    <span>InovaLab</span>
                    <a href="#" className="home-icon"><Icon.House size='1em'/></a>
                </div>
                <div className="header-right">
                    <a href="" className="noti"><Icon.Bell size='1em'/></a>
                    <a href="" className="cfg"><Icon.Gear size='1em'/></a>
                </div>
            </header>
        </>
    );
}

export default Header;