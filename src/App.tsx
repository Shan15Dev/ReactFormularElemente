import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyForm from "./components/MyForm";
import Post from "./components/Post";
import RadioButtons from "./components/RadioButtons";
import Checkbox from "./components/Checkbox";
import BmiForm from './components/BMI';
import BootstrapButtons from "./components/BootstrapButtons";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <MyForm/>
            <Post/>
            <RadioButtons />
            <Checkbox />
            <BmiForm />
            <BootstrapButtons />
        </div>
    )
}

export default App
