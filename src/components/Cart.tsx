import React from "react";
import {AspectRatio, Button, Divider, Heading, HStack, Image, Stack, Text, VStack, useColorMode,
    useColorModeValue} from "@chakra-ui/react";

const Cart = () => {
    const {toggleColorMode} = useColorMode()
    const  bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg={bgColor}>
            <VStack alignItems="flex-start" spacing={3}>
                <Heading size={"2xl"}>Your cart</Heading>
                <Text>If the price is too hard on your eyes, try changing the theme</Text>
                <Button variant="link" onClick={toggleColorMode}>try changing the theme</Button>
            </VStack>
            <HStack spacing={6} alignItems="center" w="full">
                <AspectRatio ratio={1} w={24}>
                    <Image src="https://picsum.photos/500/300?random=1"/>
                </AspectRatio>
                <Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="center">
                    <VStack spacing={0} w="full" alignItems="flex-start">
                        <Heading size="md">Penny board</Heading>
                        <Text>QWERTYUIOP</Text>
                    </VStack>
                    <Heading textAlign="end" size="sm">
                        $119
                    </Heading>
                </Stack>
            </HStack>
            <Divider />
            <HStack w="full" justifyContent="space-between">
                <Text>Total</Text>
                <Heading size="lg">$150</Heading>
            </HStack>
        </VStack>
    )
}

export default Cart
