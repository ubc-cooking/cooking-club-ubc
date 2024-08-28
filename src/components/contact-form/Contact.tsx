import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme/index"
import { Form } from "./Form";

export function Contact() {
    return (
        <ChakraProvider theme={theme}>
            <Form />
        </ChakraProvider>
    )
}