import React from 'react'
import { Grid, styled } from '@mui/material';

const imageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const Wrapper = styled(Grid)`
  margin-top: 10px;
  justify-content: space-between;
`

const MidSection = () => {
    return (
        <Wrapper lg={12} sm={12} md={12} xs={12} container>
            {
                imageURL.map(image => (
                    <Grid lg={4} md={4} sm={12} xs={12} >
                        <img src={image} alt='image' style={{ width: '100%' }} />
                    </Grid>
                ))
            }
        </Wrapper>
    )
}

export default MidSection