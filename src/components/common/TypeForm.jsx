'use client'
import styled from 'styled-components'

export default function TypeForm({ setShowTypeForm, showTypeForm }) {

    const handleFormStatus = () => {
        setShowTypeForm(!showTypeForm)
    }

    return (
        <TypeFormContainer $isShow={showTypeForm}>
            <Close onClick={handleFormStatus}>X</Close>
            <div data-tf-live="01JTSGFGCPX4J3SW0YN4PPZDVZ" ></div>
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
`
const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
`