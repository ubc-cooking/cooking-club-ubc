import { Box, Image } from "@chakra-ui/react";

export function UpcomingEventImg({
        img = 'img/chef.png'
    }) {


    return (
        <Box boxSize='sm'>
            <Image src={img}/>
        </Box>
    )

}