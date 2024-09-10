"use client";

import Image from "@/components/Image";
import { Flex, IconButton, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} py={1} px={6}>
      <Image src={"/logo.svg"} width={16} height={16} alt={"img"} />
      <Flex justifyContent={"space-around"} w={500}>
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
      <IconButton
        variant="unstyled"
        aria-label="hamburger"
        background={"transparent"}
        icon={<Hamburger active={active} />}
        onClick={() => setActive(!active)}
      />
    </Flex>
  );
}
