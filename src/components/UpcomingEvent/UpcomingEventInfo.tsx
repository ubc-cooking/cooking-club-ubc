import { Box, Heading, Flex, Text } from "@chakra-ui/react"

export function UpcomingEventInfo({
    title = "Title of event",
    body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    where = "Hells kitchen",
    when = "March 23, 2030 10:30am-12:30pm"}) {

    const textMargin = 3


    return (
        <Flex backgroundColor='accent' width="24%" borderRadius='5px' padding='30px' flexDirection='column'>
            <Heading marginBottom={textMargin}>
                {title}
            </Heading>
            <Text marginBottom={textMargin}>
                {body}
            </Text>
            <Text marginBottom={textMargin}>
                {where}
            </Text>
            <Text marginBottom={textMargin}>
                {when}
            </Text>
        </Flex>
    )
}