import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const FormWrapper = styled.form`
  max-width: 600px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  & * {
    margin-bottom: 1.6rem;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  margin: 0 0 8px 0;
  padding-top: 5px;
`;

const Salary = styled.select`
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  height: 3rem;
  padding: 0;
  float: right;
  display: block;
  border-bottom: 1px solid #9e9e9e;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const ErrorLabel = styled.p`
  color: red;
`;

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [colour, setColour] = useState('');
  const [salary, setSalary] = useState('');
  const [error, setError] = useState(false);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handleDateChange = e => {
    setDateOfBirth(e.target.value);
  };

  const handleColourChange = e => {
    setColour(e.target.value);
  };

  const handleSalaryChange = e => {
    setSalary(e.target.value);
  };

  const handleSubmit = e => {
    const regex = /^[A-Za-z]+$/;
    e.preventDefault();
    if (!regex.test(name) || !regex.test(colour)) setError(true);
    else {
      console.log({
        name,
        email,
        dateOfBirth,
        colour,
        salary,
      });
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {error && (
        <ErrorLabel>Invalid entry in one of the fields below!</ErrorLabel>
      )}
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <Input
        type="date"
        placeholder="Date of Birth"
        value={dateOfBirth}
        onChange={handleDateChange}
        required
      />
      <Input
        type="text"
        placeholder="Favourite Colour"
        value={colour}
        onChange={handleColourChange}
        required
      />
      <Salary value={salary} placeholder="Salary" onChange={handleSalaryChange}>
        <option defaultValue="Choose a salary range" hidden>
          Choose range
        </option>
        <option value="0 to 20000">£0 to £20000 per annum</option>
        <option value="£20000 to £30000">£20000 to £30000 per annum</option>
        <option value="£30000 to £40000">£30000 to £40000 per annum</option>
        <option value="£40000 to £50000">£40000 to £50000 per annum</option>
        <option value="£50000 plus">£50000+ per annum</option>
      </Salary>
      <Button>Submit</Button>
    </FormWrapper>
  );
};

export default Form;
