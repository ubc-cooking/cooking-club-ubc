"use client";

import { Flex, FlexProps, Icon, Link, ResponsiveValue } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

export default function Socials({ ...props }: FlexProps) {
  return (
    <Flex {...props}>
      <Link as={NextLink} href="">
        <Icon
          as={FaInstagram}
          boxSize={{ base: 5, md: 6 }}
          color={"background"}
        />
      </Link>
      <Link as={NextLink} href="">
        <Icon as={FaTiktok} boxSize={{ base: 5, md: 6 }} color={"background"} />
      </Link>
      <Link as={NextLink} href="">
        <Icon
          as={FaFacebookF}
          boxSize={{ base: 5, md: 6 }}
          color={"background"}
        />
      </Link>
      <Link as={NextLink} href="">
        <Icon
          as={FaLinkedinIn}
          boxSize={{ base: 5, md: 6 }}
          color={"background"}
        />
      </Link>
    </Flex>
  );
}