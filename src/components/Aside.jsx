import './Aside.css'
import logo from './img/logo.png'
import * as Icon from 'react-bootstrap-icons'

function Aside() {
    return (
        <aside className="aside">
            <div className="aside-menu">
                <img src={logo} alt="Logo" />
                <hr />
                <a href="" className='top-menu'><Icon.BookHalf className='book-half'/> Plano de treino</a>
                <a href="" ><Icon.ChatLeftText className='book-half'/> Contato</a>
                <a href="" ><Icon.CreditCard className='book-half'/> Controle de Despesas</a>
                <a href="" ><Icon.EmojiSmile className='book-half'/> Feedback</a>
                <a href="" className='logout'><Icon.DoorOpenFill /> Logout</a>
            </div>
        </aside>
    );
}

export default Aside;