import Image from "@/components/Image";
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Socials from "../Socials";
import JoinBtn from "./JoinBtn";
5;

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
      px={{ base: 5, sm: 20, md: 40 }}
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
            <Heading
              color={"background"}
              fontSize={{ base: "5xl", md: "7xl" }}
              mb={4}
            >
              {link}
            </Heading>
            <Divider borderColor={"background"} borderWidth={"2px"} />
          </Link>
        ))}
      </Flex>
      <Center>
        <Flex
          position={"absolute"}
          flexDir={"row"}
          width={{ base: "90%", sm: "70%" }}
          bottom={"7%"}
          justifyContent={"space-between"}
          zIndex={500}
        >
          <JoinBtn />
          <Socials
            justifyContent={"space-evenly"}
            alignItems={"center"}
            width={{ base: "50%", sm: "20%" }}
          />
        </Flex>
      </Center>
    </Box>
  );
}
