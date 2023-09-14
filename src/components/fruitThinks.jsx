
import "./fruitThinks.css"
import React from "react";

function FruitThinks({fruitImg, fruitName, setValue, value}) {


    return (
        <>
        <article>
            <h1>{fruitImg}</h1>
            <h1>{fruitName}</h1>

            <button
                type="button"
                onClick={() => value > 0 && setValue(value - 1)}
            >
                -
            </button>

            <p>{value}</p>

            <button
                type="button"
                onClick={() => setValue(value + 1) }
            >+</button>

        </article>

        </>
    );
}

export default FruitThinks