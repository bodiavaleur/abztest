import React from 'react';
import { Formik, Form } from 'formik';
import { Input, File } from '../atoms/';
import Select from 'react-select';

export const SignupForm = ({ onSelectChange }) => (
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
        <select
          className="select"
          placeholder="Select your position"
          onChange={onSelectChange}>
          <option className="select__option">Frontend Developer</option>
          <option className="select__option">Backend Developer</option>
          <option className="select__option">QA</option>
          <option className="select__option">Designer</option>
        </select>
        <File />
      </Form>
    )}
  />
);
