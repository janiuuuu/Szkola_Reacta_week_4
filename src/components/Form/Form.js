import React from 'react'

class Form extends React.Component{
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
        const view = this.state.showResult;
        console.log("Wiec "+view);
        return(
            <div className="App">
                {view ?
                <form onSubmit={this.handleSubmit}>
                    <input type="number" name="netto" onChange={this.handleChange}/>
                    <select name="tip" value={this.state.value} onChange={this.handleChange}>
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
                    Cena brutto: {this.state.allAmount} zł.
                </div>}
                
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