import { Container } from "@chakra-ui/react";

export default async function Recipe({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const title = (await params).slug;
  return <Container height={"100vh"}>Halo {title}</Container>;
}
