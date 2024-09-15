import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import theme from "../../theme/index"
import { Form } from "./Form";
import { Shallot } from "./Shallot";
import { ContactHeader } from "./ContactHeader";

export function Contact() {
    return (
        <ChakraProvider theme={theme}>
            <Box width="100%">
                <ContactHeader />
                <Flex direction="row" alignItems='center' justifyContent="center">
                    <Shallot />
                    <Form />
                </Flex>
            </Box>
        </ChakraProvider>
    )
}