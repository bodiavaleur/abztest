import React from 'react';
import { Input } from '../atoms/Inputs';
import { Formik, Form } from 'formik';

export const Signup = () => {
  return (
    <section>
      <h2 className="h2">Register to get a work</h2>
      <p className="p p--md">
        Attention! After successful registration and alert, update the list of
        users in the block from the top
      </p>
      <SignupForm />
    </section>
  );
};

const SignupForm = () => (
  <Formik
    initialValues={{ name: '', email: '', phone: '' }}
    render={({
      values,
      errors,
      status,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting
    }) => (
      <Form className="signup-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Name"
          name="name"
          placeholder="Your name"
          value={values.name}
          onBlurHandler={handleBlur}
          onChangeHandler={handleChange}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder="Your email"
          value={values.email}
          onBlurHandler={handleBlur}
          onChangeHandler={handleChange}
        />
        <Input
          type="tel"
          label="Phone"
          name="phone"
          placeholder="+38(___) ___ __ __"
          value={values.phone}
          onBlurHandler={handleBlur}
          onChangeHandler={handleChange}
        />
      </Form>
    )}
  />
);
