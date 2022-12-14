import React from 'react';
import { Paper } from '@mui/material';
import styled from 'styled-components';


const Item = (props) => {
    // console.log(item);
    return (
        <Wrapper>
            <Paper className="caraousel-paper">
                <img src={props.item.image} alt={props.item.title} />

            </Paper>
        </Wrapper>



    )
};
const Wrapper = styled.section `
    width: auto;
    .caraousel-paper{
        img{
            width:100% ;
            height: 400px;
        }
    }
`;



export default Item;
