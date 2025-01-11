import Gallery from "@/components/about/Gallery";
import Team from "@/components/about/Team";
import { Box, Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <Box height={"fit-content"}>
      <Heading
        color={"primary"}
        fontSize={{ base: "4xl", md: "6xl" }}
        mt={40}
        mb={20}
        w={"100%"}
        textAlign={"center"}
      >
        Get To Know More!
      </Heading>
      <Gallery />
      <Team />
    </Box>
  );
}
