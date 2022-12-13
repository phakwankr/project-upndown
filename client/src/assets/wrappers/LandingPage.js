import styled from 'styled-components'

const Wrapper = styled.main`
  .nav-landing {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    background: rgba(0,0,0,0);
    display: flex;
    align-items: center;
    color: var(--blue-dark);
}

  .container-page {
    background: rgb(170,221,255);
    background: linear-gradient(45deg, rgba(170,221,255,1) 38%, rgba(60,240,159,1) 100%);
    min-height: calc(100vh - var(--nav-height));
    align-items: center;
    display: grid;
    margin-top: -3rem;

  

}
  h1 {
    flex-basis: auto;
    font-size: 4.5rem;
    font-weight: 600;
    padding-bottom: 2.5rem;
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }

  @media (min-width: 992px) {
  .main-img {
      display: block;
      width: 40%;
      display: block;
      width: 40%;
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
  }
`
export default Wrapper
