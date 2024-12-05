import Recipes from "@/components/menu/Recipes";
import { Box, Container } from "@chakra-ui/react";

export default function MenuPage() {
  return (
    <Container maxW={"7xl"}>
      <Box height={"100vh"} />
      <Recipes />
    </Container>
  );
}
