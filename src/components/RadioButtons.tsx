import React, {useState} from 'react';

function RadioButton() {
    const [radioOption, setRadioOption] = useState<string>()

    return (
        <div>
            <div onChange={event => setRadioOption((event.target as HTMLInputElement).value)}>
                <input type="radio" value="Sauber Motorsport" name="f1"/> Sauber Motorsport
                <input type="radio" value="Red Bull" name="f1"/> Red Bull
                <input type="radio" value="Haas" name="f1"/> Haas
            </div>
            {radioOption}

        </div>
    );
}

export default RadioButton;