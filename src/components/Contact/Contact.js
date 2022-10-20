import React from 'react';
import {useFormik} from 'formik';
import validationSchema from '../Form/Validation';

function Contact() {
    const {handleSubmit, values, handleChange, errors, touched, handleBlur, resetForm} = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            message: "",
            phone: "",
            website: ""
        },
        onSubmit: (values) => {
            alert("Hi There!!!");
            resetForm();
        },
        validationSchema
    });
    return (
        <form onSubmit={handleSubmit}>
            <div className='container'>
                <h1 className='display-4'>Contact Us</h1>
                <div className='row'>
                    <div className='col'>
                        <div className='form-group my-2'>
                            <label>
                                Name <span className='text-danger'>*</span>
                            </label>
                            <input 
                                className='form-control' 
                                name='fullname' 
                                placeholder='Enter Your Name' 
                                value={values.fullname} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                            />
                            {errors.fullname && touched.fullname ? <div className='text-danger'>{errors.fullname}</div> : null}
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group my-2'>
                            <label>
                                Email <span className='text-danger'>*</span>
                            </label>
                            <input 
                                autoComplete='none' 
                                className='form-control' 
                                name='email' 
                                placeholder='Enter Your Email' 
                                value={values.email} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                            />
                            {errors.email && touched.email ? <div className='text-danger'>{errors.email}</div> : null}
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <div className='form-group my-2'>
                            <label>Phone</label>
                            <input 
                                autoComplete='none' 
                                type='number' 
                                className='form-control' 
                                name='phone' 
                                placeholder='Enter Your Phone Number' 
                                value={values.phone} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                            />
                            {errors.phone && touched.phone ? <div className='text-danger'>{errors.phone}</div> : null}
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group my-2'>
                            <label>Website</label>
                            <input 
                                autoComplete='none' 
                                className='form-control' 
                                name='website' 
                                placeholder='Enter Your URL' 
                                value={values.website} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                            />
                            {errors.website && touched.website ? <div className='text-danger'>{errors.website}</div> : null}
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <div className='form-group my-2'>
                            <label>
                                Message <span className='text-danger'>*</span>
                            </label>
                            <textarea 
                                cols='4'  
                                rows='5' 
                                className='form-control' 
                                name='message' 
                                placeholder='Enter Message' 
                                defaultValue={values.message} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                            />
                            {errors.message && touched.message ? <div className='text-danger'>{errors.message}</div> : null}
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <button className='btn btn-dark my-2 w-25' type='submit'>Submit Message</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default Contact;
