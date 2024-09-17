import Image from "@/components/Image";
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
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
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            width={{ base: "50%", md: "20%" }}
          >
            <Link as={NextLink} href="">
              <Icon
                as={FaInstagram}
                boxSize={{ base: 5, md: 7 }}
                color={"background"}
              />
            </Link>
            <Link as={NextLink} href="">
              <Icon
                as={FaTiktok}
                boxSize={{ base: 5, md: 7 }}
                color={"background"}
              />
            </Link>
            <Link as={NextLink} href="">
              <Icon
                as={FaFacebookF}
                boxSize={{ base: 5, md: 7 }}
                color={"background"}
              />
            </Link>
            <Link as={NextLink} href="">
              <Icon
                as={FaLinkedinIn}
                boxSize={{ base: 5, md: 7 }}
                color={"background"}
              />
            </Link>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
}
