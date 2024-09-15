import { Box, Heading, Flex } from "@chakra-ui/react";

export function ContactHeader() {
    return (
    <Box>
        <Flex flexDirection='column' alignItems='center'>
            <Heading color='primary' fontSize='80px' letterSpacing='7px' h='100%' fontWeight='300px' marginBottom='3px'>
                Reach out to us!
            </Heading>
            <Heading color='secondary' fontSize='25px' h='100%' letterSpacing='2px' fontWeight='200px'>
                ~ we wont fry you ~
            </Heading>
        </Flex>
    </Box>
    )   
}