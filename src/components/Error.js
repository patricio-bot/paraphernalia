import React, { useEffect } from 'react'
import { GiSkullCrack } from 'react-icons/gi'
import styled from 'styled-components'
import { useDencrypt } from 'use-dencrypt-effect'

const Error = () => {
  const values = ['there', 'was', 'an', 'error...', 'error...wrong']
  const { result, dencrypt } = useDencrypt()
  useEffect(() => {
    let i = 0
    const action = setInterval(() => {
      dencrypt(values[i])
      i = i === values.length - 1 ? 0 : i + 1
    }, 2000)
    return () => clearInterval(action)
    // eslint-disable-next-line
  }, [])
  return (
    <Wrapper className="section section-center text-center">
      <div className="container">
        <GiSkullCrack />
        <h2>{result}</h2>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.container{
max-width:50vw;
margin:auto;
padding:2rem;
position:relative;
}

svg{
  opacity:0;
  font-size:8rem;
  animation-name:color;
  animation-duration:2s;
  animation-delay:3s;
  animation-iteration-count:infinite;
}
@keyframes color{
  from{
    color:#fff;
  }
  to{
    color:var(--clr-grey-1);
    opacity:1;
  }
}
`

export default Error
