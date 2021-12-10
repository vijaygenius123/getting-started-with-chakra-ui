import React from 'react';
import {Container, Flex} from "@chakra-ui/react";
import Details from "components/Details";
import Cart from "components/Cart";

function App() {
    return (
        <Container maxW="container.xl" p={2}>
            <Flex h={{base: 'auto', md: '100vh'}} py={[0, 10, 20]} direction={{ base :'column-reverse', md: 'row'}}>
                <Details />
                <Cart />
            </Flex>
        </Container>
    );
}

export default App;
