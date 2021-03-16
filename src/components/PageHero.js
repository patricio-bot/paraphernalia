import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product, brand }) => {

  return (
    <Wrapper>
      <div className="section-center">
        <ul>
          <li>
            <Link to='/'>Home</Link>

          </li>
          {product && <li>
            <Link to='/products'>
              Products
            </Link></li>}
          {title && <li id='last' className={title && 'title'} >
            {title}
          </li>}
          {brand && <li className={brand && 'brand'}>{brand}</li>}




        </ul>
      </div>
    </Wrapper>
  )

}

const Wrapper = styled.section`
   z-index:-1;
  width: 100%;
  margin-top:2rem;
  display: flex;
  align-items: center;
  font-size:1.6rem;
  text-transform:capitalize;
  clip-path: polygon(95% 0%, 100% 50%, 95% 100%, 0% 100%, 0% 50%, 0% 0%);

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
  ul{
    display:flex;
    align-items:center;
  
    li{
      padding:1rem 3rem;
      cursor:pointer;
      transition:var(--transition);
      font-size:1.2rem;
        &:first-child{
          background-color:var(--clr-primary-10);
          clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 0% 50%, 0% 0%);
          border-radius: var(--radius);
              &:hover{
                background-color:var(--clr-primary-7);
              }
             
            }
         &:nth-child(2){
            background-color:var(--clr-primary-9);
            clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%);
            margin-left:-3rem;
                &:hover{
                  background-color:var(--clr-primary-7);
                }
                &:hover ~#last{
                background-color:var(--clr-primary-9);
              }
                &:hover ~:last-child{
                  background-color:var(--clr-primary-10);
                }
            }
          
    }
    .title{
              background-color:var(--clr-primary-8);
              clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%);
              margin-left:-4rem;
     
          }
    .brand{
              background-color:var(--clr-primary-7);
              clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%);
              margin-left:-3rem;
     
          }
   
   
    @media screen and (min-width:900px){
      li{
        padding:1rem 4rem;
      font-size:1.6rem;
      &:nth-child(2){   
            margin-left:-4rem;   
            }     
      }
      .brand{
        margin-left:-4rem;  
      }
    }
  }
`

export default PageHero
