import React from 'react'
import { useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '10px',
    border: '1px solid #f0f0f0',
    width: '90%'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    borderRadius: '',
    height: '50',
    [theme.breakpoints.down('lg')]: {
        width: '46',
    },
    [theme.breakpoints.down('sm')]: {
        width: '4'
    }
}))

const ActionItem = ({ product }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity))
        navigate('/cart');
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'chowdharysayan2805@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }

    return (
        <LeftContainer>
            <Box styled={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90' }}>
                <Image src={product.detailUrl} alt='product' />
            </Box>
            <StyledButton variant='contained' onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}><Cart />Add to Cart</StyledButton>
            <StyledButton variant='contained' onClick={() => buyNow()} style={{ background: '#fb541b' }}><Flash />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem