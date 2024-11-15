"use client";

import { links } from "@/data/links";
import { Box, Flex, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "../Image";
import Socials from "../Socials";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <>
      <Box
        position={"relative"}
        width={"100%"}
        background={"primary"}
        height={"4rem"}
      >
        <Box
          width={"100%"}
          height={"100%"}
          roundedBottom={"full"}
          position={"absolute"}
          top={0}
          background={"background"}
          zIndex={5}
        />
      </Box>
      <footer>
        <Grid
          position={"relative"}
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(5, 1fr)"
          height={363}
          background={"primary"}
          py={10}
          px={"10%"}
        >
          <GridItem
            as={Flex}
            gap={1}
            rowSpan={3}
            colSpan={1}
            direction={"column"}
            w={"100%"}
            h={"100%"}
            position={"relative"}
            zIndex={10}
          >
            {links.map((navLink) => (
              <Link
                key={navLink.link}
                as={NextLink}
                href={navLink.link}
                fontFamily={"heading"}
                fontSize={"3xl"}
                color={"background"}
                width={"fit-content"}
              >
                {navLink.label.toUpperCase()}
              </Link>
            ))}
          </GridItem>
          <GridItem rowSpan={2} />
          <GridItem rowSpan={2} width={"80%"} position={"relative"} zIndex={10}>
            <Newsletter />
          </GridItem>
          <Image
            src={"/footer-logo.svg"}
            alt="footer"
            width={350}
            height={350}
            w={620}
            h={"auto"}
            position={"absolute"}
            top={"-6.5rem"}
            right={{ base: 0, lg: "5%" }}
            zIndex={1}
          />
          <GridItem rowSpan={1} />
          <GridItem rowSpan={2}>
            <Socials width={"50%"} gap={5} height={"100%"} />
          </GridItem>
        </Grid>
        <Text
          position={"absolute"}
          bottom={0}
          right={"20%"}
          zIndex={10}
          color={"background"}
          fontSize={"sm"}
          p={1}
        >
          UBC Cooking Club &copy; 2024
        </Text>
      </footer>
    </>
  );
}
