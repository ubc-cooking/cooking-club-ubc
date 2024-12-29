import FAQ from "@/components/home/FAQ";
import Landing from "@/components/home/Landing";
import Workshop from "@/components/home/Workshop";
import Event from "@/components/home/Event";
import { Box } from "@chakra-ui/react";
import UpcomingEvent from "@/components/home/Upcoming";

export default function Home() {
  return (
    <Box position={"relative"}>
      <Landing />
      <Event />
      <UpcomingEvent />
      <Workshop />
      <FAQ />
    </Box>
  );
}
