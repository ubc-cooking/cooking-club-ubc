"use client";

import { links } from "@/data/links";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
  chakra,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "../Image";
import Socials from "../Socials";

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
      <footer style={{ position: "relative" }}>
        <Grid
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
          <GridItem rowSpan={2} width={"85%"}>
            <Heading
              position={"relative"}
              color={"background"}
              fontFamily={"body"}
              letterSpacing={"1px"}
              zIndex={10}
            >
              Sign up for our{" "}
              <chakra.span
                position={"relative"}
                color={"secondary"}
                fontFamily={"heading"}
                fontWeight={"regular"}
                zIndex={"inherit"}
              >
                newsletter!
              </chakra.span>
            </Heading>
            <Input
              placeholder="Enter your email"
              width={"100%"}
              height={"3.5rem"}
              mt={5}
              px={5}
              rounded={"2xl"}
              fontSize={"2xl"}
              background={"background"}
              _focus={{
                background: "background",
                borderColor: "accent",
                zIndex: 10,
              }}
              _placeholder={{ color: "primary", background: "background" }}
              zIndex={10}
            />
            <Image
              src={"/footer-logo.svg"}
              alt="footer"
              width={600}
              height={600}
              position={"absolute"}
              top={-40}
              right={{ base: 0, lg: "5%" }}
              zIndex={1}
            />
          </GridItem>
          <GridItem rowSpan={1} />
          <GridItem rowSpan={2}>
            <Socials width={"50%"} gap={5} height={"100%"} />
          </GridItem>
        </Grid>
      </footer>
    </>
  );
}
