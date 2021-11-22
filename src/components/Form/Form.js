import { useState, useRef, useEffect } from 'react'

const style = {
    color : '#f00'
}

// function useInput (){
//     const [value, setValue] = useState('');

//     const handleChange = ( event ) => {
//         setValue( event.target.value );
//         console.log(`netto ${event.target.name} `);
//     };
//     return[value, handleChange];
// }

// function isValid(refElement, errors){
//     console.log('ciekaw co jest ' + refElement.current.value);
//     if(refElement.current.value === ''){
//         showBorder(refElement);
//     }
// }





function showBorder(refElement){
    refElement.current.style.border = "#f00 1px solid";
}

function Form (){

    const [errors, setErrors] = useState(
        {
         imie:'',
         email:'',
         bio:'',
         gender:'',
         reg:''
        }
     );
     const [radio, setRadio] = useState('');
     const [checkbox, setCheckbox] = useState('');
     const [validForm, setValidForm] = useState(false);

    function isValid(refElement){
        if(refElement.current.value === ''){
            showBorder(refElement);
        }
        setErrors(prevState => (
            {...prevState, [refElement.current.name]: refElement.current.value !== '' ? 'no' : 'yes'}
            ));
    }

    function isValidCheckbox(checkbox, refElement){
        console.log(' co jest w checkbox '+ checkbox.current.checked);
        if(!checkbox.current.checked){
            showBorder(refElement);
            setErrors(prevState => (
                {...prevState, reg: checkbox.current.checked ? 'no' : 'yes'}
                ));
        }
    }

    function isValidRadio(radio, refElement){
        //console.log(' co jest w checkbox '+ radio);
        if(radio === ''){
            showBorder(refElement);
            setErrors(prevState => (
                {...prevState, gender: radio === '' ? 'yes' : 'no'}
                ));
        }
    }


    const checkErrors = () =>{
        let count = 0;
        
        for (const [key, value] of Object.entries(errors)) {
            console.log(`${key}: ${value}`);
            if(value !== 'no'){
               count ++;
            }
          }
            if (count === 0 ) setValidForm(true);
    }

    const nameInput = useRef();
    const emailInput = useRef();
    const bioTextarea = useRef();
    const genderRadio = useRef();
    const regulaminLabel = useRef();
    const regulaminCheckbox = useRef();

    const resetBorder = () =>{
        //console.log('jestem w reset ');
        nameInput.current.style.border = "solid 1px grey";
        emailInput.current.style.border = "solid 1px grey";
        bioTextarea.current.style.border = "solid 1px grey";
        genderRadio.current.style.border = "solid 1px grey";
        regulaminLabel.current.style.border = "solid 1px grey";

        // setErrors({
        //     imie:true,
        //     email:true,
        //     bio:true,
        //     gender:true,
        //     reg:true
        //    });
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();

        resetBorder();

        isValid(nameInput, errors);
        isValid(emailInput);
        isValid(bioTextarea);
        isValidRadio(radio, genderRadio);
        isValidCheckbox(regulaminCheckbox, regulaminLabel);
        checkErrors();
        console.log(errors.imie, errors.email, errors.bio, errors.gender, errors.reg) ;


    }

    const onValueChange = ( event ) => {
        setRadio(event.target.value);
        console.log(' co jest w radio '+ event.target.value);
        setErrors(prevState => (
            {...prevState, gender: !event.target.value ? 'yes' : 'no'}
            ));
        //console.log(' co jest w errors '+ Object.entries(errors));
    }

    const onCheckboxChange = ( event ) => {
        console.log(' regulanin jaka jest wartosc '+ event.target.checked);
        setCheckbox(event.target.checked);
        setErrors(prevState => (
            {...prevState, reg: event.target.checked ? 'no' : 'yes'}
            ));
        console.log(' regulanin jaka jest wartosc '+ event.target.name);
        //setErrors({...errors, reg : event.target.value});
    }

    const onInputChange = ( event ) => {
        console.log(' inputChange jaka jest wartosc '+ event.target.name , event.target.value);
        setErrors(prevState => (
            {...prevState, [event.target.name]: event.target.value !== '' ? 'no' : 'yes'}
            ));
        }

    return(
        <div className="App">
            {!validForm ? <form onSubmit={handleSubmit}>
                <div>
                    <label> Imię: </label>
                    <input type="text" name="imie" ref={nameInput} onChange={onInputChange}/>
                    <br />
                    {errors.imie === 'yes' && <span style={style} >Pole wymagane</span>}
                </div>
                <br />
                <div>
                    <label> Email: </label>
                    <input type="text" name="email" ref={emailInput} onChange={onInputChange}/>
                    <br />
                    {errors.email === 'yes' && <span style={style} >Pole wymagane</span>}
                </div>
                <br />
                <div>
                    <label> Biografia: </label>
                    <textarea  name="bio" ref={bioTextarea} onChange={onInputChange}/>
                    <br />
                    {errors.bio === 'yes' && <span style={style} >Pole wymagane</span>}
                </div>
                <br />
                <label ref={genderRadio}>
                    <input type="radio" value="MALE" name="gender" onChange={onValueChange}/> Male
                    <input type="radio" value="FEMALE" name="gender" onChange={onValueChange}/> Female
                    <br/>
                    {errors.gender === 'yes' && <span style={style} >Pole wymagane</span>}
                </label>
                <br />
                <div>
                <label ref={regulaminLabel}>
                    Akceptacja regulaminu:
                    <input
                        name="regulamin"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        ref={regulaminCheckbox}
                        />
                    </label>
                    <br/>
                    {errors.reg === 'yes' && <span style={style} >Pole wymagane</span>}
                </div>
                <br />
                <div>
                    <button type="submit">Wyślij</button>
                </div>
            </form>
            :
            <label>Sukces !!!!</label>
            }
        </div>
    );
    }
export default Form;