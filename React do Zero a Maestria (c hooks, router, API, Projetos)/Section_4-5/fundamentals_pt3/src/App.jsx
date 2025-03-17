import "./App.css";
import MyForm from './Components/MyForm'
import './Components/MyForm.module.css'

function App() {

  return (
    <>
      <h2>Forms:</h2>
      <MyForm />
    </>
  )
}

export default App


{/*
  <MyForm user={{name: "Josias" , email: "josias@gmail.com" , role: "3" }}/>
*/}