import React, { useState } from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { GiCheckMark, GiCrossedBones } from 'react-icons/gi'
import Fade from 'react-reveal/Fade'

const Contact = () => {
  const { closeSubmenu } = useProductsContext()
  const [status, setStatus] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS")
        setSuccess(true)
        setError(false)
        setTimeout(() => {
          setSuccess(false)
        }, 3000)
      } else {
        setStatus("ERROR");
        setSuccess(false)
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000)
      }
    };
    xhr.send(data);
  }


  return (
    <Fade left>
      <Wrapper onMouseOver={closeSubmenu}>
        <div className="section-center">
          <h3>Join us and get 40% off!</h3>
          <div className="content">
            <p>Brooklyn small batch beard fam cray jianbing art party tote bag wayfarers edison bulb banjo. Selfies 90's cornhole, mustache pabst tbh taxidermy franzen bushwick tattooed enamel pin keffiyeh jianbing helvetica sustainable.</p>
            <form className="contact-form" action="https://formspree.io/f/xzbkonjy"
              method="POST" onSubmit={handleSubmit}>
              <input type="email" name="_replyto" id="email" className="form-input" placeholder="enter email" required />
              <button className="btn submit-btn">subscribe</button>
              {status === 'SUCCESS' && success && <p className='success'><GiCheckMark /> Thanks! We got it! </p>}
              {status === 'ERROR' && error && <p className='error'><GiCrossedBones /> Ooops! Something went wrong! </p>}
            </form>
          </div>
        </div>
      </Wrapper>
    </Fade>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  .success{
    color:green;
    font-size:1.4rem;
  }
  .error{
    color:red;
    font-size:1.4rem;
  }
  h3 {
    text-transform: none;
  }
  p {
    font-size:1rem;
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap:1rem;
  }

  .form-input,
  .submit-btn {
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
    border:none;
    outline:none;
  }
  .form-input {
    border-right: none;
    border-bottom: 1px solid var(--clr-black);
    color: var(--clr-grey-3);
    transition: var(--transition);
  }
  .submit-btn {
    border-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .form-input:focus{
    background-color:var(--clr-primary-10);
    border:none;
    border-radius:var(--radius);
  }
  .submit-btn {
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
  }
  .submit-btn:focus{
    transform:translateY(4px);
  }
  
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
      font-size:1.2rem;
    }
    padding:15rem 0 10rem;
  }
  
`

export default Contact
