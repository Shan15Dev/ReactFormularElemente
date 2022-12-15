import React, {useState} from 'react';
import {Heart, HeartFill} from "react-bootstrap-icons";

function BootstrapButtons() {
    const [heart, setHeart] = useState<Boolean>(false);
    return (
        <div onClick={() => setHeart(!heart)}>
            {
                heart === false ? <Heart size={96}/> : <HeartFill size={96}/>
            }

        </div>
    );
}

export default BootstrapButtons;