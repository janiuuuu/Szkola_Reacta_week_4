import react from "react";
import { useForm } from "react-hook-form";
import "../../style.css"

const Form = () => {

        const { register, handleSubmit, reset, formState: { errors } } = useForm();
        const onSubmit = (data) => {
            //alert(JSON.stringify(data));
            alert("Dziękujemy za wysłanie!!!");
            reset();
        }
        return (

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Imię:</label>
                <input {...register("imie",{required: true,} )} />
                {errors?.imie?.type === "required" && <p>Pole wymagane</p>}
                <label>Email:</label>
                <input {...register("email", {required: true,})} />
                {errors?.email?.type === "required" && <p>Pole wymagane</p>}
                <label>Bio:</label>
                <textarea {...register("bio", {required: true,}) }/>
                {errors?.bio?.type === "required" && <p>Pole wymagane</p>}
                <div role="group" aria-labelledby="my-radio-group">
                    <label>Płeć:</label>
                    <label>
                        <input {...register("plec",{ required: true })} type="radio" name="plec" value="female"/> Kobieta
                        
                        <input {...register("plec",{ required: true })} type="radio" name="plec" value="male"/> Mężczyzna
                    </label>
                    {errors?.plec?.type === "required" && <p>Pole wymagane</p>}
                </div>
                     <label>
                    Example 1 (basic input)
                </label>
                <input
                    {...register('regulamin',{required: true,})}
                    name="regulamin"
                    value={true}
                    type="checkbox"
                    />
                {errors?.regulamin?.type === "required" && <p>Pole wymagane</p>}
                <input type="submit" />
            </form>
          );
}
export default Form;