"use client";

import { Heading, Flex, Text, Button } from "@chakra-ui/react"

export function UpcomingEventInfo({
        title = "Title of event",
        body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        where = "Hells kitchen",
        when = "March 23, 2030 10:30am-12:30pm"
    }) {

    const textMargin = 4
    const fontSizeBody = 14
    const handleSubmit = () => {
        // link to google form
    }

    return (
        <Flex backgroundColor='accent' width="28%" borderRadius='0px 5px 5px 5px' padding='15px 20px' flexDirection='column' marginLeft='-5px'>
            <Heading marginBottom={textMargin}>
                {title}
            </Heading>
            <Text marginBottom={textMargin} fontSize={fontSizeBody}>
                {body}
            </Text>
            <Flex marginBottom={1} flexDirection='row'>
                <Text as='b' fontSize={fontSizeBody}>Where:&nbsp;</Text>
                <Text fontSize={fontSizeBody}>{where}</Text>
            </Flex>
            <Flex marginBottom={textMargin} flexDirection='row'>
                <Text as='b' fontSize={fontSizeBody}>When:&nbsp;</Text>
                <Text fontSize={fontSizeBody}>{when}</Text>
            </Flex>
            <Text marginBottom={1} as='b' fontSize={fontSizeBody}>
                Got Questions?
            </Text>
            <Flex marginBottom={textMargin} flexDirection='row'>
                <Text fontSize={fontSizeBody}>Contact us at&nbsp;</Text>
                <Text as='u' fontSize={fontSizeBody}>ubccookingclubinfo@gmail.com</Text>
            </Flex>
            <Button onSubmit={handleSubmit} width='30%' backgroundColor='secondary' color='background'>
                Register
            </Button>
        </Flex>
    )
}