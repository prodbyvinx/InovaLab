import './Dashboard.css'
import Treino from '../Treino'

function Dashboard() {
    return (
        <>
            <main className="container">
                <h1 className='saudacao'>Olá nome, seja bem vindo!</h1>
                <br />
                <article className="resumo-plano">
                    <p>Aqui está o seu treino de hoje!</p>
                    <figure className="treino-hoje">
                        <br />
                        Esse é o treino de hoje!
                    </figure>
                </article>
            </main>
            
        </>
    )
}

export default Dashboard;