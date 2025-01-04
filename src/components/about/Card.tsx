"use client";

import { Box, Center, GridItem, Text } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Image from "../Image";

gsap.registerPlugin(useGSAP);

export default function Card(props: { person: number }) {
  const { person } = props;
  const [active, setActive] = useState<boolean>(false);

  const overlay = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });
    gsap.set(overlay.current, { yPercent: -100 });
    tl.current.to(overlay.current, {
      yPercent: 0,
      duration: 0.7,
      ease: "power2.inOut",
    });
  });

  useEffect(() => {
    active ? tl.current?.play() : tl.current?.reverse();
  }, [active]);

  return (
    <GridItem
      colSpan={1}
      height={"fit-content"}
      position={"relative"}
      onMouseEnter={() => {
        tl.current?.play();
        setActive(true);
      }}
      onMouseLeave={() => {
        tl.current?.reverse();
        setActive(false);
      }}
      onClick={() => setActive(!active)}
      overflow={"hidden"}
    >
      <Image
        src={"/home/workshop.webp"}
        width={500}
        height={500}
        alt="person"
        w={"100%"}
        h={{ base: 400, sm: 300 }}
        objectFit={"cover"}
        // _hover={{ opacity: 0.7, transition: "0.2s" }}
      />
      <Text textAlign={"center"} p={2}>
        &quot;Most likely to fly to space with {person} car&quot;
      </Text>
      <Box
        ref={overlay}
        className="overlay"
        position={"absolute"}
        background={"secondary"}
        top={0}
        h={{ base: 400, sm: 300 }}
        width={"100%"}
        zIndex={10}
        opacity={1}
      >
        <Center h={"100%"}>
          <Box textAlign={"center"}>
            <Text fontWeight={"bold"}>John Snow</Text>
            <Text>2nd Year</Text>
            <Text>Events Director</Text>
          </Box>
        </Center>
      </Box>
    </GridItem>
  );
}
