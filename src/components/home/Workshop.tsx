"use client";

import { Box, Heading, Text, chakra, Center, Button } from "@chakra-ui/react";
import Image from "../Image";
import NextLink from "next/link";

export default function Workshop() {
  return (
    <Box position={"relative"} w={"100%"} h={"30rem"}>
      <Image
        src={"/home/workshop.webp"}
        // bgGradient={"linear(to-b, url(/home/workshop.webp), pink.500)"}
        zIndex={-1}
        opacity={"30%"}
        alt="background"
        width={"200"}
        height={"200"}
        h={"100%"}
        w={"100%"}
        objectFit={"cover"}
        position={"absolute"}
        top={0}
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear(to-b, rgba(255, 249, 225, 1) 0%, rgba(255, 255, 255, 0) 20%)"
        zIndex={1}
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear(to-t, rgba(255, 249, 225, 1) 0%, rgba(255, 255, 255, 0) 20%)"
        zIndex={1}
      />
      <Center height={"100%"} position={"relative"} zIndex={10}>
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
          <Button
            size={"lg"}
            variant={"outline"}
            borderColor={"secondary"}
            color={"secondary"}
            borderRadius={"full"}
            fontFamily={"heading"}
            fontWeight={"regular"}
            border={"2px"}
            mt={8}
            _hover={{
              background: "secondary",
              color: "background",
            }}
          >
            RECIPES
          </Button>
        </Box>
      </Center>
    </Box>
  );
}
