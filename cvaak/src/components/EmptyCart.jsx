import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react'
// import { Grid } from 'swiper';

const EmptyCart = () => {
    return (
        <Box bg="#f6f6f6">
            <Grid align={'center'} gap='30px' p='50px'>
                <Image
                    // h="100%"
                    w={{ "lg": "12%", "md": "20%", "sm": "20%" }}
                    src={'https://www.1mg.com/images/online_consultation/empty-cart-icon.svg'}
                    alt={''}
                    m='auto'
                />
                <Text fontWeight={'700'}>Oops!</Text>
                <Text >Looks like there is no item in your cart yet.</Text>
                <Button
                    size={"md"}
                    borderRadius="5px"
                    bg={"#ff6f61"}
                    color="#fff"
                    m='auto'
                    _hover={{
                        bg: "#fd7c70",
                    }}
                    onClick={() => router.push('/')}
                >
                    ADD MEDICINES
                </Button>
            </Grid>
        </Box>
    )
}

export default EmptyCart;