import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

const temp: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1];

export default function Team() {
  return (
    <Container maxW={"4xl"}>
      <Heading textAlign={"center"} mt={20} mb={10}>
        Meet the Team!
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={5}
      >
        {temp.map((n, idx) => {
          return (
            <GridItem key={idx} colSpan={1} height={"fit-content"}>
              <Box
                height={{ base: 400, sm: 300 }}
                background={"white"}
                transition={".4s"}
                _hover={{ background: "lightgray" }}
              />
              <Text textAlign={"center"} p={2}>
                &quot;Most likely to fly to space with a car&quot;
              </Text>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
}
