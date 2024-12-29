import FAQ from "@/components/home/FAQ";
import Workshop from "@/components/home/Workshop";
import Event from "@/components/home/Event";
import { Box } from "@chakra-ui/react";
import UpcomingEvent from "@/components/home/Upcoming";

export default function Home() {
  return (
    <Box>
      <Box width={"100%"} height={"100vh"} />
      <Event />
      <UpcomingEvent />
      <Workshop />
      <FAQ />
    </Box>
  );
}
