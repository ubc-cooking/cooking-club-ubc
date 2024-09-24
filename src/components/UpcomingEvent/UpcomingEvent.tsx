import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "../../theme/index";
import { UpcomingEventInfo } from "./UpcomingEventInfo";
import { UpcomingEventImg } from "./UpcomingEventImg";

export function UpcomingEvent() {
    return (
        <ChakraProvider theme={theme}>
            <Flex flexDirection='row'>
                <UpcomingEventImg />
                <UpcomingEventInfo />
            </Flex>
        </ChakraProvider>
    )
}