import React from 'react';
import {Container, Flex} from "@chakra-ui/react";
import Details from "components/Details";
import Cart from "components/Cart";

function App() {
    return (
        <Container maxW="container.xl" p={2}>
            <Flex h="100vh" py={20}>
                <Details />
                <Cart />
            </Flex>
        </Container>
    );
}

export default App;
