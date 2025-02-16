import styled from "styled-components";

const StyledError = styled.div`
  text-align: center;
  padding: 2.4rem;
  background-color: var(--color-grey-100);
  border-radius: 4px;
`;

function Error({ message = "Something went wrong" }) {
  return (
    <StyledError>
      <p>{message}</p>
    </StyledError>
  );
}

export default Error;
