'use client'
import styled from 'styled-components'

export default function TypeForm({ setShowTypeForm, showTypeForm }) {

  const handleFormStatus = () => {
    setShowTypeForm(!showTypeForm)
  }

  return (
    <TypeFormContainer $isShow={showTypeForm}>
      <Close onClick={handleFormStatus}>X</Close>
      <div data-tf-live="01JVAZWYP5DQWFYA86N6JRB52G" ></div>
    </TypeFormContainer>
  )
}

const TypeFormContainer = styled.div`
  display: ${({ $isShow }) => ($isShow ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 50%;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`
const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  font-weight: bold;
  background-color: black;
  padding: 10px;
  border-radius: 50%;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 100001;
`


// < div data-tf - live="01JVAZWYP5DQWFYA86N6JRB52G" ></div > <script src="//embed.typeform.com/next/embed.js"></script>