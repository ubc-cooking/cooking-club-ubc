import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Container,
  Heading,
  Box,
} from "@chakra-ui/react";
import Image from "../Image";

const datas = [
  {
    question: "What is the pythagoras theorem?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the pythagoras theorem?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the pythagoras theorem?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the pythagoras theorem?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the pythagoras theorem?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What is the pythagoras theorem?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function FAQ() {
  return (
    <Container my={10}>
      <Box position={"relative"}>
        <Heading fontFamily={"body"}>FAQ</Heading>
        <Image
          src={"/home/bulbIcon.svg"}
          alt="bulb"
          width={100}
          height={100}
          top={-10}
          left={{ base: 20, md: -24 }}
          position={"absolute"}
          zIndex={-1}
        />
      </Box>
      <Accordion my={7}>
        {datas.map((data, idx) => (
          <AccordionItem
            key={idx}
            background={"accent"}
            my={5}
            borderRadius={"md"}
          >
            <AccordionButton p={4}>
              <Heading
                as="span"
                fontFamily={"body"}
                fontSize={"lg"}
                flex="1"
                textAlign="left"
              >
                {data.question}
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{data.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
