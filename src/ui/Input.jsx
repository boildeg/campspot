import styled from "styled-components";

const Input = styled.input`
  border: 1px solid
    ${(props) =>
      props.error ? "var(--color-red-700)" : "var(--color-grey-300)"};
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);

  &:focus {
    outline: none;
    border: 1px solid
      ${(props) =>
        props.error ? "var(--color-red-700)" : "var(--color-brand-600)"};
  }
`;

export default Input;
