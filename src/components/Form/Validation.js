import React from 'react';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  fullname: yup.string("Enter a valid string").required("Required"),
  email: yup.string("Enter a valid input").email("Enter a valid email").required("Required"),
  message: yup.string("Enter a valid input").required("Required"),
  phone: yup.string("Enter a valid number"), // Is not required.
  website: yup.string("Enter a valid url") // Is not required.
});
export default validationSchema;
