import React from 'react'
import styled from 'styled-components'
import Button from '../../../general/components/Button'
import { useNavigate } from 'react-router-dom'

const List = styled.ul`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const ListItem = styled.li`
    
`

const CategoryList = () => {
    const navigate = useNavigate()
  return (
    <List>
        <ListItem>
            <Button onClick={()=>navigate("/game")} variant={"rectangular"}>Movies</Button>
        </ListItem>
    </List>
  )
}

export default CategoryList