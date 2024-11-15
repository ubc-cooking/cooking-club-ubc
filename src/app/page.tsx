import FAQ from "@/components/home/FAQ";
import Workshop from "@/components/home/Workshop";
import { Box } from "@chakra-ui/react";
import { Contact } from "@/components/contact-form/ContactForm";

export default function Home() {
  return (
    <Box>
      <Box width={"100%"} height={"100vh"} />
      <Workshop />
      <FAQ />
    </Box>
  );
}
