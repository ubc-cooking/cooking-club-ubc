import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "../Image";

const event = {
  title: "Title of event",
  imagePath: "/home/workshop.webp",
  date: "4",
  month: "JUNE",
  location: "Hell's Kitchen",
  time: "March 23, 2030 10:30-12:30",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  registerLink: "",
};

export default function Event() {
  return (
    <Box>
      <Heading
        position={"relative"}
        fontSize={{ base: "4xl", sm: "6xl" }}
        fontWeight={"regular"}
        textAlign={"center"}
      >
        Let&apos;s Get{" "}
        <span style={{ position: "relative", height: "100%" }}>
          Cookin&apos;
          <Image
            src={"/home/scribble-title.svg"}
            alt="scribble"
            position={"absolute"}
            width={200}
            height={10}
            w={{ base: 150, sm: 200 }}
            bottom={-2}
            right={0}
            zIndex={-1}
            objectFit={"contain"}
          />
        </span>
      </Heading>
      <Flex
        my={10}
        mx={{ base: "5%", md: "10%" }}
        direction={{ base: "column", md: "row" }}
        borderRadius={"lg"}
        overflow={"hidden"}
        boxShadow={"xl"}
      >
        <Box
          width={{ base: "100%", md: 400, lg: "60%" }}
          height={{ base: 300, md: 460 }}
          position={"relative"}
        >
          <Image
            src={event.imagePath}
            alt="event"
            width={1000}
            height={1000}
            objectFit={"cover"}
            w={"100%"}
            h={"100%"}
          />
          <Box
            position={"absolute"}
            aspectRatio={1}
            top={0}
            right={0}
            textAlign={"center"}
            w={28}
            bg={"rgba(163, 197, 225, 50%)"}
            p={3}
          >
            <Heading fontStyle={"regular"} fontSize={"5xl"}>
              {event.date}
            </Heading>
            <Text fontWeight={"bold"}>{event.month}</Text>
          </Box>
        </Box>
        <Box
          width={{ base: "100%", md: 400, lg: "40%" }}
          height={{ base: "fit-content", md: 460 }}
          background={"accent"}
          p={5}
        >
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            my={5}
            fontWeight={"regular"}
          >
            {event.title}
          </Heading>
          <Text my={5}>{event.description}</Text>
          <Text mt={2}>
            <strong>WHERE:</strong> {event.location}
          </Text>
          <Text mb={2}>
            <strong>WHEN:</strong> {event.time}
          </Text>
          <Text>
            <strong>Got Questions?</strong> <br />
            Contact us at <u>ubccookingclubinfo@gmail.com</u>
          </Text>
          <Button
            size={"md"}
            mt={3}
            background={"secondary"}
            color={"background"}
            borderRadius={"md"}
            fontFamily={"heading"}
            fontWeight={"regular"}
            boxShadow={"0 5px 0px #FFF9E1, 0 8px 15px rgba(0, 0, 0, 0.2)"}
            transition={"transform 0.2s ease, box-shadow 0.2s ease"}
            _hover={{
              filter: "brightness(1)",
            }}
            _active={{
              boxShadow: "0px 0px 0px #FFF9E1, 0 6px 10px rgba(0, 0, 0, 0.2)",
              transform: "translateY(2px)",
            }}
          >
            Register
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
