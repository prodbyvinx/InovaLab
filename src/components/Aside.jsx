import './Aside.css'
import * as Icon from 'react-bootstrap-icons'

function Aside() {
    return (
        <aside className="aside">
            <div className="aside-menu">
                <a href="" className="planos">Plano de treino</a>
                a.
            </div>
            <button className="handle-aside">
                <Icon.ArrowRightShort color='white' size='2em'/>
            </button>
        </aside>
    );
}

export default Aside;