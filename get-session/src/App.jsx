import './App.css'
import AlertMessage from './components/AlertMessage'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <AlertMessage paragraph = {"We are upgrading to the Session Network and migrating to Session Token."}/>
      <NavBar/>
    </>
    
  )
}

export default App
