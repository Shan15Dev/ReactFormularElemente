import {ChangeEvent, SyntheticEvent, useState} from "react";
import ReactDOM from "react-dom";

export default function MyForm() {
    const [name, setName] = useState<string>("")

    // SyntheticEvent, alle event klassen von react, sind on top of these.
    const handleSubmit = (event: SyntheticEvent) => {

        // Prevents the application from starting the default procedure of an event click from React
        // In this case it would completely refresh the webpage and than execute the code below.
        event.preventDefault()
        alert(`The name you entered was: ${name}`)
        console.log(name)
        setName("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}