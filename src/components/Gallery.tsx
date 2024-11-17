import { Grid, GridItem, GridItemProps } from "@chakra-ui/react";
import React from "react";

interface CustomItemProps extends GridItemProps {
  children: React.ReactNode;
}

const Item = ({ children, ...rest }: CustomItemProps) => {
  return (
    <GridItem background={"white"} borderRadius={"2xl"} m={2} {...rest}>
      {children}
    </GridItem>
  );
};

export default function Gallery() {
  return (
    <Grid
      w={"100%"}
      height={"fit-content"}
      px={10}
      templateColumns={"repeat(4,1fr)"}
      templateRows={"repeat(4,1fr)"}
    >
      <Item colSpan={2} rowSpan={1} h={{ base: 200, lg: 300 }}>
        a
      </Item>
      <Item colSpan={2} rowSpan={2}>
        a
      </Item>
      <Item colSpan={1} rowSpan={1}>
        a
      </Item>
      <Item colSpan={1} rowSpan={1}>
        a
      </Item>
      <Item colSpan={3} rowSpan={1}>
        a
      </Item>
      <Item colSpan={1} rowSpan={1}>
        a
      </Item>
      <Item colSpan={2} rowSpan={1}>
        a
      </Item>
      <Item colSpan={2} rowSpan={1}>
        a
      </Item>
    </Grid>
  );
}
