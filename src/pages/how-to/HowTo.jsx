import React from 'react'
import Conatiner from '../../general/components/Conatiner'
import BackHeader from '../../general/components/BackHeader'
import styled from 'styled-components'
import HowToList from './components/HowToList'

const StyledContainer = styled(Conatiner)`
  padding-top: 32px;
  padding-bottom: 32px;
`

const HowTo = () => {
  return (
    <StyledContainer bgBlur>
      <BackHeader icon={"/images/icon-back.svg"} title={"How to play"}/>
      <HowToList/>
    </StyledContainer>
  )
}

export default HowTo