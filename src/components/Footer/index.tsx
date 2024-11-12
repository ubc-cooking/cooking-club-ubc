import { Grid, Flex, Link, GridItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { links } from "@/data/links";

export default function Footer() {
  return (
    <footer>
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(5, 1fr)"
        height={363}
        background={"primary"}
      >
        <GridItem
          as={Flex}
          rowSpan={3}
          direction={"column"}
          w={"100%"}
          h={"100%"}
        >
          {links.map((navLink) => (
            <Link
              key={navLink.link}
              as={NextLink}
              href={navLink.link}
              fontFamily={"heading"}
              fontSize={"2xl"}
              color={"background"}
            >
              {navLink.label.toUpperCase()}
            </Link>
          ))}
        </GridItem>
        <GridItem rowSpan={5} bgColor={"white"}>
          
        </GridItem>
        <GridItem color={"background"}>test</GridItem>
      </Grid>
    </footer>
  );
}
