import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.blue};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: blue;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    margin-right: 100px;
    padding: 0.5rem 2rem;

  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;npm r
    }
    &::before {
      height: 17px;
      content: '';
      display: block;
      background-image: linear-gradient(to right, #0059E1 0%, #0017DE 50%, #0059E1 100%);
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 4s linear infinite;
    }
  }
`;

export default Form;
