import React from 'react'
import styled from 'styled-components'
import Conatiner from '../../general/components/Conatiner'
import BackHeader from '../../general/components/BackHeader'
import CategoryList from './components/CategoryList'

const StyledContainer = styled(Conatiner)`
  padding-top: 32px;
  padding-bottom: 32px;
`

const Category = () => {
  return (
    <StyledContainer bgBlur>
      <BackHeader icon={"/images/icon-back.svg"} title={"Pick a category"}/>
      <CategoryList/>
    </StyledContainer>
  )
}

export default Category