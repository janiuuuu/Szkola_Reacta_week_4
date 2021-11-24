import react from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import "../../style.css"

const FormikExample = () =>{
    return (
        <Formik
          initialValues={{ 
            imie: '',
            email: '',
            bio: '',
            plec:'',
            regulamin:false,
          }}

          validationSchema={Yup.object({
            imie: Yup.string()
              .required('Pole wymagane'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            bio: Yup.string()
              .required('Required'),
            plec: Yup.string()
            .oneOf(
              ['female', 'male'],
              'Invalid Job Type'
            )
            .required('Required'),
            regulamin: Yup.boolean()
              .required('Required')
              .oneOf([true], 'You must accept the terms and conditions.'),
          })}
          onSubmit={(values, { setSubmitting, resetForm  }) => {
            setTimeout(() => {
              //alert(JSON.stringify(values, null, 2));
              alert("Dziękujemy za wysłanie!!!");
              resetForm();
              setSubmitting(false);
              
            }, 400);
          }}
        >
          <Form className="App">
            <label htmlFor="imie">Imie:</label>
            <Field name="imie" type="text" />
            <ErrorMessage component="div" className="error" name="imie" />
    
            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage component="div" className="error" name="email" />

            <label htmlFor="bio">Bio:</label>
            <Field name="bio" as="textarea"/>
            <ErrorMessage component="div" className="error" name="bio" />

            <div role="group" aria-labelledby="my-radio-group">
            
            <label htmlFor="plec">Płeć:
              <Field type="radio" name="plec" value="female" />
              Kobieta
              <Field type="radio" name="plec" value="male" />
              Mężczyzna
            </label>
            <ErrorMessage component="div" name="plec" className="error"/>
            <label htmlFor="regulamin" className="checkbox">
              <Field type="checkbox" name="regulamin"/> Akceptuje regulamin:
              </label>
              <ErrorMessage component="div" name="regulamin" className="error"/>
          </div>
    
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      );
};

export default FormikExample;