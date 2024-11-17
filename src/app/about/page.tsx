import Gallery from "@/components/Gallery";
import { Box, Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <Box height={"fit-content"}>
      <Heading
        color={"primary"}
        fontSize={"6xl"}
        mt={40}
        w={"100%"}
        textAlign={"center"}
      >
        Get To Know More!
      </Heading>
      <Gallery />
    </Box>
  );
}
