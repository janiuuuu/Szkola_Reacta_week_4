import { useState } from "react";

function useInput (){
    const [value, setValue] = useState('');

    const handleChange = ( event ) => {
        setValue( event.target.value );
        console.log(`netto ${event.target.name} `);
    };
    return[value, handleChange];
}

function FormFun(){
    const [netto, handleNettoChange] = useInput('');
    const [tip, handleTipChange] = useInput(5);
    const [showResult, setShowResult] = useState(true);
    const [allAmount, setAllAmount] = useState(true);

    const handleSubmit = ( event ) => {
        event.preventDefault();

        let vat = 10;
        let amount = parseFloat(netto) + parseFloat(tip / 100) + parseFloat(vat / 100);
        setAllAmount(parseInt(amount));
        setShowResult(false);
    }

    return(
    <div className="App">
        {showResult ? <form onSubmit={handleSubmit}>
            <input type="number" name="netto" onChange={handleNettoChange}/>
            <select name="tip" onChange={handleTipChange}>
                <option value = "0" >Wybierz wartość napiwku</option>
                <option value = "5" >5</option>
                <option value = "10" >10</option>
                <option value = "15" >15</option>
                <option value = "20" >20</option>
            </select>
            <label>% netto</label>
            <button type="submit">Przelicz</button>
        </form>
        :
        <div>
                        Cena brutto: {allAmount} zł.
        </div>
        }
    </div>
    );
}
export default FormFun;