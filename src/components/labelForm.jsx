
import React from "react";

function LabelForm({titleName, type, id,name, value, setValue, placeholder, checked }) {


    return (


                <label htmlFor={id}>
                    <h3>{titleName}</h3>
                    <input
                        type={type}
                        id={id}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </label>

    );
}

export default LabelForm