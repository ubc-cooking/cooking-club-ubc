import FAQ from "@/components/home/FAQ";
import Landing from "@/components/home/Landing";
import Workshop from "@/components/home/Workshop";
import Event from "@/components/home/Event";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box position={"relative"}>
      <Landing />
      <Event />
      <Workshop />
      <FAQ />
    </Box>
  );
}
