import React from 'react'
import IconButton from './IconButton'
import Title from './Title'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BackHeader = ({icon, title}) => {
    const navigate = useNavigate()
  return (
    <StyledHeader>
        <IconButton onClick={()=>navigate("/")} icon={icon}/>
        <Title>{title}</Title>
    </StyledHeader>
  )
}

export default BackHeader