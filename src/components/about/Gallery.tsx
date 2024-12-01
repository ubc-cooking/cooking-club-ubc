import { Grid, GridItem, GridItemProps } from "@chakra-ui/react";
import React from "react";

interface CustomItemProps extends GridItemProps {
  children: React.ReactNode;
}

const Item = ({ children, ...rest }: CustomItemProps) => {
  return (
    <GridItem
      background={"white"}
      borderRadius={"2xl"}
      m={{ base: 1, md: 2 }}
      {...rest}
    >
      {children}
    </GridItem>
  );
};

export default function Gallery() {
  return (
    <Grid
      w={"100%"}
      height={"fit-content"}
      px={{ base: 1, sm: 10 }}
      templateColumns={"repeat(4,1fr)"}
      templateRows={"repeat(4,1fr)"}
    >
      <Item colSpan={2} rowSpan={1} h={{ base: 150, sm: 200, lg: 300 }}>
        1
      </Item>
      <Item colSpan={2} rowSpan={2}>
        2
      </Item>
      <Item colSpan={1} rowSpan={1}>
        3
      </Item>
      <Item colSpan={1} rowSpan={2}>
        4
      </Item>
      <Item colSpan={1} rowSpan={1}>
        5
      </Item>
      <Item colSpan={1} rowSpan={1}>
        6
      </Item>
      <Item colSpan={1} rowSpan={1}>
        7
      </Item>
      <Item colSpan={2} rowSpan={1}>
        8
      </Item>
      <Item colSpan={2} rowSpan={1}>
        9
      </Item>
    </Grid>
  );
}
