import styled from 'styled-components'

const Wrapper = styled.section`
  .full-page
  display: grid;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 0rem;
    align-items: center;

  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
    margin-right: auto;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn-block {
    margin-top: 1rem;
    
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`
export default Wrapper
