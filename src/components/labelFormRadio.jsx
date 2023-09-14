
import React from "react";

function LabelFormRadio({moment, id, name, value, setValue}) {


    return (

        <label>

            <input
                type="radio"
                id={id}
                name={name}
                value={moment}
                checked={value === moment}
                onChange={(e) => setValue(e.target.value)}
            />
            {moment}
        </label>


    );
}

export default LabelFormRadio