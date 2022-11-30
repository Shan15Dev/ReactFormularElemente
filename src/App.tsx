import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyForm from "./components/MyForm";
import Post from "./components/Post";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <MyForm/>
            <Post/>
        </div>
    )
}

export default App
