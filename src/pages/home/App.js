import { Header } from "../../components/Header"
import background from '../../assets/background.jpg'
import './styles.css'



function App() {
  return (
    <div className="App">
      <Header/>
      <div className='conteudo'>
        <img src={background} className='background' alt='background'/>

        <div className='info'>
          <div>  
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>            
          </div>

          <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/179767849?v=4" className="profile" alt="profile"/>
            <div>
              <h3>Nome perfil</h3>
              <span>@gabriel-code</span>
              <p>Descrição</p>
            </div>
          </div>

          <hr/>

        </div>
      </div>

      
    </div>
  );
}

export default App;
