"use client";

import { Box, Heading, Text, chakra, Center } from "@chakra-ui/react";
import Image from "../Image";

export default function Workshop() {
  return (
    <Box position={"relative"} w={"100%"} h={"30rem"}>
      <Image
        src={"/home/placeholder.webp"}
        alt="background"
        width={"200"}
        height={"200"}
        h={"100%"}
        w={"100%"}
        objectFit={"contain"}
        position={"absolute"}
        top={0}
      />
      <Center height={"100%"}>
        <Box textAlign={"center"}>
          <Heading fontSize={"5xl"}>
            <chakra.span
              bgImage={"/home/scribble.svg"}
              bgSize={"contain"}
              bgRepeat={"no-repeat"}
            >
              MISSED
            </chakra.span>{" "}
            <chakra.span fontFamily={"body"}>A WORKSHOP?</chakra.span>
          </Heading>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            DON&apos;T WORRY CHECK OUT OUR{" "}
            <chakra.span fontFamily={"heading"}>RECIPES</chakra.span> PAGE
          </Text>
        </Box>
      </Center>
    </Box>
  );
}
