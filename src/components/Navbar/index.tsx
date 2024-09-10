"use client";

import Image from "@/components/Image";
import {
  Box,
  Flex,
  IconButton,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import JoinBtn from "./JoinBtn";

export default function Navbar() {
  const [active, setActive] = useState<boolean>(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} py={1} px={6}>
      <Image src={"/logo.svg"} width={16} height={16} alt={"img"} />
      {/* Empty box to center navlinks */}
      <Box />
      {!isMobile && (
        <Flex justifyContent={"space-around"} w={{ md: 400, lg: 500 }}>
          <Link as={NextLink} href="">
            home
          </Link>
          <Link as={NextLink} href="">
            about
          </Link>
          <Link as={NextLink} href="">
            recipes
          </Link>
          <Link as={NextLink} href="">
            contact
          </Link>
        </Flex>
      )}
      <Flex
        width={"20%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {!isMobile && <JoinBtn />}
        <IconButton
          variant="unstyled"
          aria-label="hamburger"
          background={"transparent"}
          icon={<Hamburger active={active} />}
          onClick={() => setActive(!active)}
        />
      </Flex>
      {active && <Menu />}
    </Flex>
  );
}
