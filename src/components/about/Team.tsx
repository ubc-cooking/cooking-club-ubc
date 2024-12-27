import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const roles: string[] = ["core", "marketing", "cooks", "finance", "external"];

const temp: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

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
                fontSize={{ base: "2xs", sm: "md" }}
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
                  {temp.map((n, idx) => {
                    return (
                      <GridItem key={idx} colSpan={1} height={"fit-content"}>
                        <Box
                          height={{ base: 400, sm: 300 }}
                          background={"white"}
                          transition={".4s"}
                          _hover={{ background: "lightgray" }}
                        />
                        <Text textAlign={"center"} p={2}>
                          &quot;Most likely {role} to fly to space with a
                          car&quot;
                        </Text>
                      </GridItem>
                    );
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
