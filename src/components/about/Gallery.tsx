import { BoxProps, Grid, GridItem, GridItemProps } from "@chakra-ui/react";
import React from "react";
import Image from "../Image";

interface CustomItemProps extends GridItemProps {
  children: React.ReactNode;
  isTall?: boolean;
}

const Item = ({ children, isTall = false, ...rest }: CustomItemProps) => {
  return (
    <GridItem
      position={"relative"}
      background={"white"}
      borderRadius={"2xl"}
      overflow={"hidden"}
      maxH={isTall ? "100%" : { base: 150, sm: 200, lg: 300 }}
      m={{ base: 1, md: 2 }}
      {...rest}
    >
      {children}
    </GridItem>
  );
};

export default function Gallery() {
  const imageStyle: BoxProps = {
    width: 1000,
    height: 1000,
    w: "100%",
    h: "100%",
    objectFit: "cover",
  };
  return (
    <Grid
      w={"100%"}
      height={"fit-content"}
      px={{ base: 1, sm: 10 }}
      templateColumns={"repeat(4,1fr)"}
      templateRows={{ base: "repeat(8,1fr)", md: "repeat(4,1fr)" }}
    >
      <Item colSpan={{ base: 4, md: 2 }} rowSpan={1}>
        <Image src={"/gallery/all.webp"} alt="all" {...imageStyle} />
      </Item>
      <Item colSpan={{ base: 4, md: 2 }} rowSpan={2} isTall>
        <Image src={"/gallery/yachaejeong.webp"} alt="all" {...imageStyle} />
      </Item>
      <Item colSpan={{ base: 2, md: 1 }} rowSpan={1}>
        3
      </Item>
      <Item colSpan={{ base: 2, md: 1 }} rowSpan={2} isTall>
        <Image src={"/gallery/sushi-bake.webp"} alt="all" {...imageStyle} />
      </Item>
      <Item colSpan={{ base: 2, md: 1 }} rowSpan={1}>
        5
      </Item>
      <Item colSpan={{ base: 2, md: 1 }} rowSpan={1}>
        6
      </Item>
      <Item colSpan={{ base: 2, md: 1 }} rowSpan={1}>
        7
      </Item>
      <Item colSpan={{ base: 4, md: 2 }} rowSpan={1}>
        <Image src={"/gallery/taco.webp"} alt="all" {...imageStyle} />
      </Item>
      <Item colSpan={{ base: 4, md: 2 }} rowSpan={1}>
        9
      </Item>
    </Grid>
  );
}
