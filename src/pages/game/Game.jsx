import React from 'react'
import Conatiner from '../../general/components/Conatiner'
import styled from 'styled-components'
import Header from './components/Header'
import Letters from './components/Letters'
import Keyboard from './components/Keyboard'

const StyledContainer = styled(Conatiner)`
  padding-top: 32px;
  padding-bottom: 32px;
`

const Game = () => {
  return (
    <StyledContainer>
      <Header/>
      <Letters/>
      <Keyboard/>
    </StyledContainer>
  )
}

export default Game