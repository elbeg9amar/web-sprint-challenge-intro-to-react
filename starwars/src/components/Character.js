// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    width:40%;
    border-style: dotted;
    margin: 0% 30% 0% 30% ;
    background-color: white;
    p {
        font-size:25px;
        text-align:center;
        color:black;
    }
`
function Character ({person} ) {
    return (
        <StyledCharacter>
            <p className='name'>Name : {person.name}</p>
            <p> BirthYear : {person['birth_year']}</p>
            <button>+</button>
        </StyledCharacter>
    )
}

export default Character