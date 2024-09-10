import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import Image from "@/components/Image";
5;
import NextLink from "next/link";

export default function Menu() {
  return (
    <Box
      position={"fixed"}
      top={0}
      right={0}
      height={"100vh"}
      width={"100%"}
      zIndex={20}
      background={"primary"}
      px={40}
    >
      <Center>
        <Image src="/dark-logo.svg" width={20} height={20} alt="" mt={3} />
      </Center>
      <Text color={"background"} fontSize={"2xl"} mb={4}>
        menu
      </Text>
      <Flex flexDir={"column"}>
        {["HOME.", "ABOUT.", "RECIPES.", "CONTACT."].map((link) => (
          <Link key={link} as={NextLink} href="/" my={2}>
            <Heading color={"background"} fontSize={"7xl"} mb={4}>
              {link}
            </Heading>
            <Divider borderColor={"background"} borderWidth={"2px"} />
          </Link>
        ))}
      </Flex>
    </Box>
  );
}
