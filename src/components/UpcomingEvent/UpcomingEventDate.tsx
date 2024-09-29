import { Flex, Text, Heading, Box } from "@chakra-ui/react";

export function UpcomingEventDate({
        day = "23",
        month = "March"
    }) {

    const size = 60


    return (
        <Box boxSize='m'>
            <Flex backgroundColor='accent'  borderRadius='10px 0px 0px 10px' flexDirection='column'
                alignContent='center' alignItems='center' justifyContent='center' padding='0px 12px' marginLeft='-105px'>
                <Heading fontSize='60px'>
                    {day}
                </Heading>
                <Text>
                    {month}
                </Text>
            </Flex>
        </Box>
    )

}