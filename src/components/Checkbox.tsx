import React, {useState} from 'react';

function Checkbox() {
    const [checkbox1, setCheckbox1] = useState<boolean>(false);
    const [checkbox2, setCheckbox2] = useState<boolean>(false);
    const [checkbox3, setCheckbox3] = useState<boolean>(false);

    return (
        <div>
            <input type="checkbox" name="one" onChange={() => setCheckbox1(!checkbox1)}/> Mercedes
            <input type="checkbox" name="two" onChange={() => setCheckbox2(!checkbox2)}/> Sauber
            <input type="checkbox" name="three" onChange={() => setCheckbox3(!checkbox3)}/> RedBull
        </div>
    );
}

export default Checkbox;