import { Box, Divider, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "../Image";

const events = [
  {
    title: "Title of event",
    imagePath: "/home/workshop.webp",
    date: "4",
    month: "JUNE",
    location: "Hell's Kitchen",
    time: "March 23, 2030 10:30-12:30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    registerLink: "",
  },
  {
    title: "Title of event",
    imagePath: "/home/workshop.webp",
    date: "4",
    month: "JUNE",
    location: "Hell's Kitchen",
    time: "March 23, 2030 10:30-12:30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    registerLink: "",
  },
];

export default function UpcomingEvent() {
  return (
    <Box mx={{ base: "5%", md: "10%" }} mb={10}>
      <Heading fontFamily={"body"} py={5}>
        Stay Tuned for More!
      </Heading>
      {events.map((event, idx) => {
        return (
          <Box key={idx}>
            <Divider
              orientation="horizontal"
              border={"1px"}
              borderColor={"accent"}
            />
            <Flex>
              <Box aspectRatio={1} textAlign={"center"} w={28} p={3}>
                <Heading fontStyle={"regular"} fontSize={"5xl"}>
                  {event.date}
                </Heading>
                <Text fontWeight={"bold"}>{event.month}</Text>
              </Box>
              <Image
                src={event.imagePath}
                alt="event"
                width={1000}
                height={1000}
                w={28}
                h={28}
                objectFit={"cover"}
              />
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                w={"100%"}
                px={5}
              >
                <Box>
                  <Heading fontStyle={"regular"} fontSize={"4xl"}>
                    {event.title}
                  </Heading>
                  <Text>
                    {event.time} / {event.location}
                  </Text>
                </Box>
                <Text color={"secondary"} fontFamily={"heading"}>
                  COMING SOON!
                </Text>
              </Flex>
            </Flex>
          </Box>
        );
      })}
      <Divider orientation="horizontal" border={"1px"} borderColor={"accent"} />
    </Box>
  );
}