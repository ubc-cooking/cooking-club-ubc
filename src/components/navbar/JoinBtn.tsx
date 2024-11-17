import { Button, Icon } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

export default function JoinBtn() {
  return (
    <Button
      size={"sm"}
      variant={"outline"}
      borderColor={"secondary"}
      color={"secondary"}
      borderRadius={"full"}
      fontFamily={"heading"}
      leftIcon={<Icon as={FaCircle} color={"#90EE90"} boxSize={3} mr={2} />}
      _hover={{
        background: "secondary",
        color: "background",
      }}
    >
      Join Us!
    </Button>
  );
}
