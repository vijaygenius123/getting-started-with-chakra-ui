import React from "react";
import {
    Heading,
    VStack,
    Text,
    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    Input,
    Select,
    Checkbox,
    Button
} from "@chakra-ui/react";

const Details = () => {
    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <VStack spacing={3} alignItems="flex-start">
                <Heading size={"2xl"}>Your details</Heading>
                <Text>f you already have an account, click here to login</Text>
                <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>First Name</FormLabel>
                            <Input placeholder="John" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder="Doe" />
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Address</FormLabel>
                            <Input placeholder="Blvd. Broken Dreams" />
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>City</FormLabel>
                            <Input placeholder="Edinburgh" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Country</FormLabel>
                            <Select>
                                <option value="GB">Great Britain</option>
                                <option value="India">India</option>
                                <option value="USA">United States Of America</option>
                            </Select>
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={2}>
                        <Checkbox defaultChecked>Ship to billing</Checkbox>
                    </GridItem>

                    <GridItem colSpan={2}>
                        <Button size="lg" w="full">Place Order</Button>
                    </GridItem>

                </SimpleGrid>
            </VStack>
        </VStack>
    )
}

export default Details
