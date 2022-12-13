import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  *{
    box-sizing: border-box;
}

body{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    min-height: 100vh;
    background: #fafafa;
}
.container{
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    width: 00px;
}
.form{
    padding: 10px 40px;
}
h2{
    text-align: center;
    margin: 0 0 0 20px;
}
.form-control{
    position: relative;
    margin-bottom: 10px;
    padding-bottom: 20px;
}

.form-control label{
    display: block;
    margin-bottom: 5px;
}

.form-control input{
    display: block;
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    width: 100%;
    padding: 10px;
    font-size: 14px;
}

.form-control input:focus{
    outline: none;
}

.form button{
    background: #3498db;
    cursor: pointer;
    color: #fff;
    width: 100%;
    margin-top: 20px;
    border: 2px solid #3498db;
    display: block;
    padding: 10px;
    font-size: 16px;
}
`

export default Wrapper
