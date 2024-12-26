import Image from "@/components/Image";
import BulletIcons from "@/components/menu/BulletIcons";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from "@chakra-ui/react";

export async function generateStaticParams() {
  // const posts = await fetch("https://.../posts").then((res) => res.json());
  const posts = ["a", "b", "c"];

  return posts.map((post) => ({
    slug: post,
  }));
}

export default async function Recipe({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <Container
      as={Flex}
      pt={32}
      height={"fit-content"}
      maxW={"5xl"}
      justifyContent={"space-between"}
      overflowX={"visible"}
      gap={10}
      direction={{ base: "column", md: "row" }}
    >
      <VStack w={{ md: "50%" }} alignItems={"start"} gap={10}>
        <Heading fontFamily={"body"} fontSize={"5xl"}>
          Canadian waffles with salt {id}
        </Heading>
        <Text fontSize={"lg"} lineHeight={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Heading fontFamily={"body"} fontSize={"xl"} mt={10}>
          How to Make it
        </Heading>
        <OrderedList fontSize={"md"}>
          {[1, 2, 3, 4].map((idx) => {
            return (
              <ListItem key={idx} position={"relative"} pl={2} py={2}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
                maxime, amet voluptatem nam facilis perspiciatis nihil nesciunt
                beatae autem cum sit aut odit eos officiis adipisci consectetur
                quis deserunt tempora!
                <Icon
                  viewBox="0 0 200 200"
                  boxSize={8}
                  color="accent"
                  position={"absolute"}
                  top={"1%"}
                  left={"-7%"}
                  zIndex={-1}
                >
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>
              </ListItem>
            );
          })}
        </OrderedList>
      </VStack>
      <VStack w={{ md: "50%" }} alignItems={"start"}>
        <Box
          aspectRatio={1 / 1}
          width={"100%"}
          rounded={"xl"}
          position={"relative"}
        >
          <Image
            src={"/home/workshop.webp"}
            alt="food"
            width={500}
            height={300}
            w={"100%"}
            h={"100%"}
            rounded={"xl"}
            objectFit={"cover"}
          />
        </Box>
        <Box p={10} background={"subtle"} w={"100%"} rounded={"xl"}>
          <Heading fontFamily={"body"} fontSize={"xl"}>
            Ingredients
          </Heading>
          <List fontSize={"md"} fontWeight={"regular"}>
            {[1, 2, 3, 4].map((idx) => {
              return (
                <ListItem key={idx} position={"relative"} pl={2} py={2}>
                  <BulletIcons />
                  260g turkey mince
                </ListItem>
              );
            })}
          </List>
        </Box>
      </VStack>
    </Container>
  );
}
