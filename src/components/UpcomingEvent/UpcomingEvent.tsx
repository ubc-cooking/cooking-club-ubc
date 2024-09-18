import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import theme from "../../theme/index";
import { UpcomingEventInfo } from "./UpcomingEventInfo";

export function UpcomingEvent() {
    return (
        <ChakraProvider theme={theme}>
            <Box>
                <UpcomingEventInfo />
            </Box>
        </ChakraProvider>
    )
}