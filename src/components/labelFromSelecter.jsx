
import React from "react";

function LabelFormSelector({titleName, id,name, value, setValue, optie1, optie2, option3 }) {


    return (


            <label htmlFor={id}>
                <h3>{titleName}</h3>
                <select
                    id={id}
                    name={name}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                <option value={optie1}>{optie1}</option>
                <option value={optie2}>{optie2}</option>
                <option value={option3}>{option3}</option>
                </select>
            </label>

    );
}

export default LabelFormSelector