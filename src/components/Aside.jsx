import './Aside.css'
<<<<<<< HEAD
import logo from './img/logo.png'
=======
>>>>>>> a14db5902baa2c8b32ae724ee70f698309a0e1d9
import * as Icon from 'react-bootstrap-icons'

function Aside() {
    return (
        <aside className="aside">
            <div className="aside-menu">
<<<<<<< HEAD
                <img src={logo} alt="Logo" />
                <hr />
                <a href="" className='top-menu'><Icon.BookHalf className='book-half'/> Plano de treino</a>
                <a href="" ><Icon.ChatLeftText className='book-half'/> Contato</a>
                <a href="" ><Icon.CreditCard className='book-half'/> Controle de Despesas</a>
                <a href="" ><Icon.EmojiSmile className='book-half'/> Feedback</a>
                <a href="" className='logout'><Icon.DoorOpenFill /> Logout</a>
            </div>
=======
                <a href="" className="planos">Plano de treino</a>
                a.
            </div>
            <button className="handle-aside">
                <Icon.ArrowRightShort color='white' size='2em'/>
            </button>
>>>>>>> a14db5902baa2c8b32ae724ee70f698309a0e1d9
        </aside>
    );
}

export default Aside;