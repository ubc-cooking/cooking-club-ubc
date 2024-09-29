import { Box, Img } from "@chakra-ui/react";

export function UpcomingEventImg({
        img = '/img/chef.jpg'
    }) {


    return (
        <Box boxSize='m' height='50%'>
            <Img src={img} alt="Event Image" bg='primary'/>
        </Box>
    )

}