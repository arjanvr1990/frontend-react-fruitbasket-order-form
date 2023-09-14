import './App.css'
import React from "react";
import FruitThinks from "./components/fruitThinks.jsx";
import LabelForm from "./components/labelForm.jsx";
import logo from "./assets/screenshot-logo.png"
import LabelFormSelector from "./components/labelFromSelecter.jsx";
import LabelFormRadio from "./components/labelFormRadio.jsx";

function App() {
    const [aardbij, setAarbij] = React.useState(0);
    const [banaan, setBanaan] = React.useState(0);
    const [appel, setAppel] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState("");
    const [zipCode, setZipCode] = React.useState("");
    const [frequentie, setFrequentie] = React.useState("");
    const [momentOfDelivery, setMomentOfDelivery] = React.useState("");
    const [formMessage, setFormMessage] = React.useState("");
    const [termsOfAgreement, toggleTermsOfAgreement] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Aardbijen - Aantal:", aardbij);
        console.log("Bananen - Aantal:", banaan);
        console.log("Appels - Aantal:", appel);
        console.log("Kiwi's - Aantal:", kiwi);
        console.log("Voornaam:", firstName);
        console.log("Achternaam:", lastName);
        console.log("Geboortedatum:", dateOfBirth);
        console.log("Postcode:", zipCode);
        console.log("Frequentie:", frequentie);
        console.log("Bezorgmoment:", momentOfDelivery);
        console.log("Uw bericht:", formMessage);
        console.log("Ik ga akkoord met de voorwaarde:", termsOfAgreement);
    };

        const handleReset = () => {
            setAarbij(0);
            setBanaan(0);
            setAppel(0);
            setKiwi(0);
        };

        return (
            <>

                <img src={logo} alt=""/>
                <div>
                    {/*<h1>Fruitmand bezorgservice</h1>*/}
                    <FruitThinks
                        fruitImg=" 🍓"
                        fruitName="Aardbijen"
                        value={aardbij}
                        setValue={setAarbij}
                    />

                    <FruitThinks
                        fruitImg=" 🍌"
                        fruitName="Bananen"
                        value={banaan}
                        setValue={setBanaan}
                    />

                    <FruitThinks
                        fruitImg=" 🍏"
                        fruitName="Appels"
                        value={appel}
                        setValue={setAppel}
                    />

                    <FruitThinks
                        fruitImg=" 🥝"
                        fruitName="Kiwi's"
                        value={kiwi}
                        setValue={setKiwi}
                    />
                    <button className="restButton" type="button" onClick={handleReset}>Reset</button>

                </div>

                <form onSubmit={handleSubmit}>

                    <LabelForm
                        titleName="Voornaam:"
                        type="text"
                        id="form-first-name"
                        name="firstName"
                        value={firstName}
                        setValue={setFirstName}
                        placeholder="vul hier jouw voornaam in"

                    />
                    <LabelForm
                        titleName="Achternaam:"
                        type="text"
                        id="form-last-name"
                        name="lastName"
                        value={lastName}
                        setValue={setLastName}
                        placeholder="vul hier jouw achternaam in"

                    />

                    <LabelForm
                        titleName="Geboortedatum:"
                        type="text"
                        id="form-date-of-birth"
                        name="date-of-birth"
                        value={dateOfBirth}
                        setValue={setDateOfBirth}
                        placeholder="dd-mm-yy"
                    />

                    <LabelForm
                        titleName="Postcode:"
                        type="text"
                        id="form-zip-code"
                        name="zip-code"
                        value={zipCode}
                        setValue={setZipCode}
                        placeholder="0000AA"
                    />


                    {/*<label htmlFor="form-first-name">*/}
                    {/*    <h3>voornaam:</h3>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        id="form-first-name"*/}
                    {/*        name="firstName"*/}
                    {/*        value={firstName}*/}
                    {/*        setValue={setFirstName}*/}
                    {/*        placeholder="vul hier jouw voornaam in"*/}
                    {/*    />*/}
                    {/*</label>*/}

                    {/*<label htmlFor="form-last-name">*/}
                    {/*    <h3>Achternaam:</h3>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        id="form-last-name"*/}
                    {/*        name="lastName"*/}
                    {/*        value={lastName}*/}
                    {/*        placeholder="vul hier jouw achternaam in"*/}
                    {/*        onChange={(e) => setLastName(e.target.value)}*/}
                    {/*    />*/}
                    {/*</label>*/}

                    {/*<label htmlFor="date-of-birth">*/}
                    {/*    <h3>Geboortedatum:</h3>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        id="form-date-of-birth"*/}
                    {/*        name="date-of-birth"*/}
                    {/*        value={dateOfBirth}*/}
                    {/*        placeholder="dd-mm-yy"*/}
                    {/*        onChange={(e) => setDateOfBirth(e.target.value)}*/}
                    {/*    />*/}
                    {/*</label>*/}

                    {/*<label htmlFor="form-zip-code">*/}
                    {/*    <h3>Postcode:</h3>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        id="form-zip-code"*/}
                    {/*        name="zip-code"*/}
                    {/*        value={zipCode}*/}
                    {/*        placeholder="0000AA"*/}
                    {/*        onChange={(e) => setZipCode(e.target.value)}*/}
                    {/*    />*/}
                    {/*</label>*/}

                    <LabelFormSelector
                        titleName="Bezorgfrequentie:"
                        id="form-frequentie"
                        name="frequentie"
                        value={frequentie}
                        setValue={setFrequentie}
                        optie1="elke week"
                        optie2="om de week"
                        option3="elke maand"
                    />


                    {/*<label htmlFor="form-frequentie">*/}
                    {/*    <h3>Bezorgfrequentie:</h3>*/}
                    {/*    <select*/}
                    {/*        id="form-frequentie"*/}
                    {/*        name="frequentie"*/}
                    {/*        value={frequentie}*/}
                    {/*        onChange={(e) => setFrequentie(e.target.value)}*/}
                    {/*    >*/}
                    {/*        <option value="optie1">elke week</option>*/}
                    {/*        <option value="optie2">om de week</option>*/}
                    {/*        <option value="optie3">elke maand</option>*/}

                    {/*    </select>*/}
                    {/*</label>*/}


                    <div>
                        <label htmlFor="moment-of-delivery">
                            <h3>Bezorgmoment:</h3>
                        </label>
                        <LabelFormRadio
                            id="moment-of-delivery-day"
                            name="momentOfDelivery"
                            value={momentOfDelivery}
                            setValue={setMomentOfDelivery}
                            moment="overdag"
                        />

                        <LabelFormRadio
                            id="moment-of-delivery-evening"
                            name="momentOfDelivery"
                            value={momentOfDelivery}
                            setValue={setMomentOfDelivery}
                            moment="savonds"
                        />

                        {/*<label>*/}

                        {/*    <input*/}
                        {/*        type="radio"*/}
                        {/*        id="moment-of-delivery-day"*/}
                        {/*        name="momentOfDelivery"*/}
                        {/*        value="overdag"*/}
                        {/*        checked={momentOfDelivery === "overdag"}*/}
                        {/*        onChange={(e) => setMomentOfDelivery(e.target.value)}*/}
                        {/*    />*/}
                        {/*    Overdag*/}
                        {/*</label>*/}
                        {/*<label>*/}
                        {/*    <input*/}
                        {/*        type="radio"*/}
                        {/*        id="moment-of-delivery-evening"*/}
                        {/*        name="momentOfDelivery"*/}
                        {/*        value="savonds"*/}
                        {/*        checked={momentOfDelivery === "savonds"}*/}
                        {/*        onChange={(e) => setMomentOfDelivery(e.target.value)}*/}
                        {/*    />{" "}*/}
                        {/*    S'avonds*/}
                        {/*</label>*/}
                    </div>

                    <LabelForm
                    titleName="Uw Bericht:"
                    type="text"
                    id="form-message"
                    name="message"
                    value={formMessage}
                    setValue={setFormMessage}
                    placeholder="type een leuk bericht"
                    />

                    {/*<label htmlFor="form-message">*/}
                    {/*    <h3>Uw bericht:</h3>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        id="form-message"*/}
                    {/*        name="message"*/}
                    {/*        value={formMessage}*/}
                    {/*        placeholder="type een leuk bericht"*/}
                    {/*        onChange={(e) => setMessage(e.target.value)}*/}
                    {/*    />*/}
                    {/*</label>*/}





                    <label htmlFor="form-terms-of-agreement">
                        <input
                            type="checkbox"
                            id="form-terms-of-agreement"
                            name="terms-of-agreement"
                            checked={termsOfAgreement}
                            onChange={() => toggleTermsOfAgreement(!termsOfAgreement)}
                        />
                        <h4>Ik ga akkoord met de voorwaarde</h4>
                    </label>

                    <button type="submit">
                        <h4>Versturen</h4>
                    </button>


                </form>

            </>
        )
    }


export default App
