import FAQ from "@/components/home/FAQ";
import Landing from "@/components/home/Landing";
import Workshop from "@/components/home/Workshop";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box position={"relative"}>
      <Landing />
      <Box height="10vh"></Box>
      <Workshop />
      <FAQ />
    </Box>
  );
}
