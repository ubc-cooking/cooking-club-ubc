import {
  Container,
  Grid,
  Heading,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Card from "./Card";

const roles: string[] = [
  "admin",
  "cooking",
  "marketing",
  "partnership",
  "internal",
];

const people: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Team() {
  return (
    <Container maxW={"4xl"}>
      <Heading textAlign={"center"} mt={20} mb={10}>
        Meet the Team!
      </Heading>

      <Tabs position="relative" variant="unstyled">
        <TabList
          display={"flex"}
          w={"fit-content"}
          textAlign={"center"}
          m={"auto"}
        >
          {roles.map((role) => {
            return (
              <Tab
                key={role}
                fontWeight={"bold"}
                px={0}
                py={1}
                fontSize={{ base: 8.5, sm: "xs", md: "md" }}
                mx={{ base: 1.5, sm: 3, md: 5 }}
              >
                {role.toUpperCase()}
              </Tab>
            );
          })}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="secondary"
          borderRadius="1px"
          w={"100%"}
        />
        <TabPanels>
          {roles.map((role) => {
            return (
              <TabPanel key={role}>
                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    sm: "repeat(3,1fr)",
                    lg: "repeat(4,1fr)",
                  }}
                  gap={5}
                >
                  {people.map((person, idx) => {
                    return <Card key={idx} person={person} />;
                  })}
                </Grid>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Container>
  );
}
