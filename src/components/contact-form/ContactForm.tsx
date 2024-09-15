import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "../../theme/index"
import { Form } from "./Form";
import { Shallot } from "./Shallot";

export function Contact() {
    return (
        <ChakraProvider theme={theme}>
            <Flex alignItems='center'>
                <Shallot />
                <Form />
            </Flex>
        </ChakraProvider>
    )
}