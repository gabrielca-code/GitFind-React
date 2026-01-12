import { Header } from "../../components/Header"
import background from '../../assets/background.jpg'
import './styles.css'
import ItemList from '../../components/ItemList'
import { useState } from "react"


function App() {
  const [user, setUser] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const handleGetData = async () => {
    console.log(user)
    
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()

    console.log(newUser)
  }

  return (
    <div className="App">
      <Header/>
      <div className='conteudo'>
        <img src={background} className='background' alt='background'/>

        <div className='info'>
          <div>  
            <input name="usuario" placeholder="@username" value={user} onChange={event => setUser(event.target.value)}/>
            <button onClick={handleGetData}>Buscar</button>            
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

          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title="Titulo1" description="Descricao1"/>
            <ItemList title="Titulo2" description="Descricao2"/>
            <ItemList title="Titulo3" description="Descricao3"/>
          </div>

        </div>
      </div>

      
    </div>
  );
}

export default App;
