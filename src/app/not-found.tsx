import { Container, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container width={"100%"} height={"100vh"}>
      <Heading color={"primary"}>Hello world!</Heading>
      <Link href="/">Go back to Home</Link>
    </Container>
  );
}
