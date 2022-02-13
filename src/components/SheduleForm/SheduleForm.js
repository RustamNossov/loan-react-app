import { Formik, Field, Form, ErrorMessage, useField,useFormikContext } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useHttp } from '../../hooks/http.hook';
import { useDispatch, useSelector  } from "react-redux";
import { dataFetched, dataFetching, dataFetchingError } from '../../actions';
import DatePicker from "react-datepicker";
import Spinner from "../Spinner/Spinner";

//========style==========
import "./SheduleForm.css";
import "react-datepicker/dist/react-datepicker.css";
const SheduleForm = () =>{
    const { request } = useHttp();
    const dispatch = useDispatch();
    const {loadingStatus} = useSelector(state=>state);


    const onSubmitForm = (values, actions) => {
        const newValues = {id: uuidv4(), ...values}
        dispatch(dataFetching())
        request(`http://localhost:300/sheduleFormData`, 'POST', JSON.stringify(newValues))
            .then(()=>{
                    actions.resetForm(); 
                    dispatch(dataFetched([]))
                })
            .cath(()=>dispatch(dataFetchingError()))                
    }

    const DatePickerField = ({ ...props }) => {
        const { setFieldValue } = useFormikContext();
        const [field] = useField(props);
        return (
          <DatePicker
            {...field}
            {...props}
            selected={(field.value && new Date(field.value)) || null}
            onChange={(val) => {
              setFieldValue(field.name, val);
            }}
          />
        );
      };

    return (
        <Formik 
            initialValues={{
                name: '',
                email:'',
                date:''
            }}
            validationSchema = {Yup.object({
                name: Yup.string() 
                        .matches(/^[ a-zA-Z\-']+$/, 'Please enter a valid name')
                        .required('Required field'),
                email: Yup.string()
                        .email('Please enter a valid email adress')
                        .required('Required field'),
                date: Yup.date()
                        .min(new Date(), 'Please select a future date')
                        .required('Required field'),


            })}
            onSubmit={(values, actions) => onSubmitForm(values, actions)}
            >
        <Form className="form">
                        <div className="form__item">
                            <label htmlFor="name">My name is</label>
                            <Field name="name" type="text" placeholder="Your name"/>
                            <svg className="icon" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                <path d="M17 19V17C17 14.7909 15.2091 13 13 13H5C2.79086 13 1 14.7909 1 17V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                            <ErrorMessage component="div" className="error" name="name"/>
                        </div>
    
                        <div className="form__item">
                            <label htmlFor="email">You can contact me here</label>
                            <Field name="email" type="email" placeholder="Your email"/>
                            <svg className="icon" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M21 3L11 10L1 3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                            <ErrorMessage component="div" className="error" name="email"/>
                        </div>
    
                        <div className="form__item">
                            <label htmlFor="date">I want to meet you on</label>
                            <DatePickerField name="date" />
                            <svg className="icon" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                <rect x="1" y="3" width="18" height="18" rx="2" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect>
                                <path d="M14 1V5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M6 1V5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M1 9H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                            <ErrorMessage component="div" className="error" name="date"/>
                        </div>
                        
                        <button type="submit" className="btn">
                            {loadingStatus === 'loading' ? <Spinner className="spinner" /> : "Schedule"}
                        </button>
                        {loadingStatus === 'error' &&  <div className="error">Something went wrong. Please try again latter.</div> }

                    </Form>
        </Formik>
    )
}


export default SheduleForm;