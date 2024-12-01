import React from 'react'
import styled from 'styled-components'
import { SearchOutlined } from '@mui/icons-material'

const SearchBarContainer = styled.div` 
max-width:500px;
display:flex;
width:90%;
border:1px solid ${({ theme }) => theme.text_secondary + 90}; 
color: ${({ theme }) => theme.text_primary};
border-radius:8px;
padding:12px 16px;
cursor:pointer;
font-size:16px;
align-items:center;
gap:6px;
`

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <SearchOutlined />
            <input
                placeholder="Rechercher a partir d'un prompt ou d'un nom"
                style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    background: "transparent",

                }} type="text" />
        </SearchBarContainer>
    )
}

export default SearchBar