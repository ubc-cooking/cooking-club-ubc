import Image from "@/components/Image";
import {
  Box,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";

const cards: string[] = ["Card1", "Card2", "Card3", "Card3", "Card3"];

const tags: string[] = ["mexican", "dinner"];

export default function MenuPage() {
  return (
    <Container maxW={"7xl"}>
      <Box height={"30vh"} />
      <SimpleGrid gap={6} columns={{ base: 1, md: 2, lg: 3 }}>
        {cards.map((card, idx) => {
          return (
            <LinkBox
              key={idx}
              background={"rgba(256,256,256,70%)"}
              h={{ base: "fit-content", md: 440 }}
              borderRadius={"2xl"}
            >
              <LinkOverlay href="#" target="_blank" />
              <Image
                src={"/home/workshop.webp"}
                alt="burger"
                width={400}
                height={200}
                borderRadius={"2xl"}
                w={"100%"}
                h={{ base: 210, sm: 220, md: 240 }}
                objectFit={"cover"}
              />
              <Container p={4}>
                <Heading fontSize={"2xl"} fontFamily={"body"} py={1}>
                  {card}
                </Heading>
                <Text fontSize={"sm"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ipsa molestiae minima ullam, maiores quisquam
                  explicabo.
                </Text>
                {tags.map((tag, idx) => {
                  return (
                    <Tag
                      key={idx}
                      size={"sm"}
                      variant="subtle"
                      colorScheme="orange"
                      px={3}
                      py={1.5}
                      mr={2}
                      mt={3}
                    >
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })}
              </Container>
            </LinkBox>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
