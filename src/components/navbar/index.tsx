"use client";

import Image from "@/components/Image";
import { links } from "@/data";
import {
  Box,
  Flex,
  IconButton,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";

import Hamburger from "./Hamburger";
import JoinBtn from "./JoinBtn";
import Menu from "./Menu";

export default function Navbar() {
  const [active, setActive] = useState<boolean>(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const menu = useRef<HTMLDivElement>(null);
  const top = useRef<SVGLineElement>(null);
  const bot = useRef<SVGLineElement>(null);
  const tl = useRef<GSAPTimeline>();

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current
      .to(top.current, { y: "-9px", rotate: "45deg", duration: 0.3 }, 0)
      .to(
        bot.current,
        {
          y: "9px",
          rotate: "-45deg",
          duration: 0.2,
        },
        0
      );
  });

  useEffect(() => {
    active ? tl.current?.play() : tl.current?.reverse();
  }, [active]);

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"fixed"}
      top={0}
      width={"100%"}
      background={"background"}
      zIndex={50}
      py={1}
      px={6}
    >
      <Image src={"/logo.svg"} width={16} height={16} alt={"img"} />
      <Box />
      {!isMobile && (
        <Flex justifyContent={"space-around"} w={{ md: 400, lg: 500 }}>
          {links.map(({ label, link }, idx) => {
            return (
              <Link key={idx} as={NextLink} href={link}>
                {label.toLowerCase()}
              </Link>
            );
          })}
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
          icon={<Hamburger top={top} bot={bot} />}
          onClick={() => setActive(!active)}
        />
      </Flex>
      {active && <Menu menu={menu} />}
    </Flex>
  );
}
