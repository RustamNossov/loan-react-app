import {useState,useEffect} from "react";
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useHttp } from '../../hooks/http.hook';
import { useDispatch } from "react-redux";
import { dataFetched, dataFetching, dataFetchingError } from '../../actions';

//========style=======
import "./LetUsHelpYouForm.css";

const LetUsHelpYouForm = () => {
        const { request } = useHttp();
    const dispatch = useDispatch();
    
    

    const onSubmitForm = (values, actions) => {
        const newValues = {id: uuidv4(), ...values}
        dispatch(dataFetching())
        request(`http://localhost:3001/formData`, 'POST', JSON.stringify(newValues))
            .then(()=>{
                    actions.resetForm(); 
                    dispatch(dataFetched([]))
                })
            .cath(dispatch(dataFetchingError()))                
    }

    

    

    return (
        <Formik 
            initialValues={{
                name: '',
                position:'',
                city: 'New-York',
                email:'',
                phone:''
            }}
            validationSchema = {Yup.object({
                name: Yup.string() 
                        .matches(/^[ a-zA-Z\-\']+$/, 'Please enter a valid name')
                        .required('Required field'),
                position: Yup.string()
                        .min(2, 'Please enter at least 2 symbols')
                        .required('Required field'),
                city: Yup.string().required('Choice a city'),
                email: Yup.string()
                        .email('Please enter a valid email adress')
                        .required('Required field'),
                phone: Yup.string()
                        .max(25, 'Phone number is not valid')
                        .matches(/^[+]*[0-9]{1,3}[ ]{0,1}[-]{0,1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-]{0,1}[ ]{0,1}[-\s\./0-9 ]*$/g, 'Phone number is not valid')
                        .required('Required field'),

            })}
            onSubmit={(values, actions) => onSubmitForm(values, actions)}
            >
            <Form className="form">
                <div className="form__block">
                    <div>
                        <label for="name">My name is</label>
                        <Field 
                            name="name" 
                            type="text"
                            placeholder="Your name"
                            />
                        <svg className="icon" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.2">
                            <path d="M17 19V17C17 14.7909 15.2091 13 13 13H5C2.79086 13 1 14.7909 1 17V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <ErrorMessage component="div" className="error white" name="name"/>
                    </div>
                </div>
                <div className="form__block">
                    <div>
                        <label for="position">And i am</label>
                        <Field 
                            name="position" 
                            type="text" 
                            placeholder="ex. Retail loan officer"/>
                        <svg className="icon" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.2" x="1" y="5" width="20" height="14" rx="2" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
                            <path opacity="0.2" d="M15 19V3C15 1.89543 14.1046 1 13 1H9C7.89543 1 7 1.89543 7 3V19" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <ErrorMessage component="div" className="error white" name="position"/>
   
                    </div>
                    <div>
                        <label for="city">From</label>
                        <Field 
                            name="city" 
                            id="city"
                            as="select"
                            >
                            <option value="New-York">New-York</option>
                            <option value="London">London</option>
                            <option value="Paris">Paris</option>
                            <option value="Berlin">Berlin</option>
                            <option value="Amsterdam">Amsterdam</option>
                        </Field>
                        <svg className="icon icon-double" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.2">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M1 11H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C13.5013 3.73835 14.9228 7.29203 15 11C14.9228 14.708 13.5013 18.2616 11 21C8.49872 18.2616 7.07725 14.708 7 11C7.07725 7.29203 8.49872 3.73835 11 1V1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <svg className="icon icon-down" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M1 1L7 7L13 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <ErrorMessage component="div" className="error white" name="city"/>
                    </div>
                </div>
                <div className="form__block">
                    <div>
                        <label for="email">Hit me up here</label>
                        <Field 
                            name="email" 
                            type="email" 
                            placeholder="Email/"/>
                        <svg className="icon" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.2">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M21 3L11 10L1 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <ErrorMessage component="div" className="error white" name="email"/>
                    </div>

                    <div>
                        <label for="phone">And here</label>
                        <Field 
                            name="phone" 
                            type="text" 
                            id="phone" 
                            placeholder="+1 (___) ___-____"/>
                        <svg className="icon" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.2">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0004 15.9201V18.9201C21.0027 19.4832 20.7675 20.0213 20.3525 20.402C19.9375 20.7827 19.3813 20.9708 18.8204 20.9201C15.7433 20.5857 12.7874 19.5342 10.1904 17.8501C7.77426 16.3148 5.72576 14.2663 4.19043 11.8501C2.50041 9.2413 1.44867 6.27109 1.12043 3.1801C1.0699 2.62097 1.2567 2.06635 1.63519 1.65172C2.01369 1.23709 2.54902 1.00063 3.11043 1.0001H6.11043C7.11429 0.990218 7.96993 1.72607 8.11043 2.7201C8.23705 3.68016 8.47188 4.62283 8.81043 5.5301C9.08516 6.26097 8.90944 7.0849 8.36043 7.6401L7.09043 8.9101C8.51398 11.4136 10.5869 13.4865 13.0904 14.9101L14.3604 13.6401C14.9156 13.0911 15.7396 12.9154 16.4704 13.1901C17.3777 13.5286 18.3204 13.7635 19.2804 13.8901C20.286 14.032 21.0256 14.9049 21.0004 15.9201Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <ErrorMessage component="div" className="error white" name="phone"/>
                    </div>
                </div>
                <div className="form__block">
                    <button type="submit" className="btn">Send</button>
                    <div className="policy">By clicking «Send» I am agreed<br/>
                        with <a href="#" >Privacy Policy</a>.</div>
                </div>
            </Form>
        </Formik>
    )
}

export default LetUsHelpYouForm;