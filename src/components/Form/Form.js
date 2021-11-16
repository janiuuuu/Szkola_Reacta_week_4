import react from 'react'

class Form extends react.Component{
        state = {
            netto:0,
            tip:5,
            vat:10,
            showResult:true,
            allAmount:0
        }

handleSubmit = ( event ) => {
    event.preventDefault();
    let netto = this.state.netto;
    let tip = this.state.tip;
    let vat = this.state.vat;

    console.log(`netto ${netto} tip ${tip/100} vat ${vat/100}`);

    let amount = parseFloat(netto) + parseFloat(tip / 100) + parseFloat(vat / 100);
    console.log(parseInt(amount));
    this.setState({allAmount : amount});
    this.setState({showResult : false});

};
handleChange = ( event ) => {
    const keyName = event.target.name;
    this.setState({[keyName]:event.target.value});
}
    render(){
        return(
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label> Imię: </label>
                        <input type="text" name="imie" onChange={this.handleChange}/>
                    </div>
                    <br />
                    <div>
                        <label> Email: </label>
                        <input type="text" name="email" onChange={this.handleChange}/>
                    </div>
                    <br />
                    <div>
                        <label> Biografia: </label>
                        <textarea  name="bio" onChange={this.handleChange}> Cześć, oto przykład tekstu w polu tekstowym.</textarea>
                    </div>
                    <br />
                    <div onChange={this.handleChange}>
                        <input type="radio" value="MALE" name="gender"/> Male
                        <input type="radio" value="FEMALE" name="gender"/> Female
                    </div>
                    <br />
                    <div>
                    <label>
                        Akceptacja regulaminu:
                        <input
                            name="regulamin"
                            type="checkbox"
                            onChange={this.handleChange} />
                        </label>
                    </div>
                    <br />
                    <div>
                        <button type="submit">Przelicz</button>
                    </div>
                </form>
                
            </div>
        );
    }
}

// const Form = () => {
//     return(
//     <div className="App">
//       <form >
//         <input type="number" name="name" />
//           <select>
//             <option value = "5" >5</option>
//             <option value = "10" >10</option>
//             <option value = "15" >15</option>
//             <option value = "20" >20</option>
//           </select>
//           <label>% netto</label>
//           <button>Przelicz</button>
//       </form>
//     </div>
//     );
// }
export default Form;