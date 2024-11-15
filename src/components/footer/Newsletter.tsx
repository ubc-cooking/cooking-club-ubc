import {
  chakra,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaAngleRight } from "react-icons/fa";

export default function Newsletter() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<{ email: string }>();

  const onSubmit = (data: { email: string }) => {
    //do nothing
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.email)}>
        <Heading
          as={FormLabel}
          htmlFor="email"
          position={"relative"}
          color={"background"}
          fontFamily={"body"}
          letterSpacing={"1px"}
          zIndex={10}
        >
          Sign up for{" "}
          <chakra.span
            color={"secondary"}
            fontFamily={"heading"}
            fontWeight={"regular"}
            zIndex={"inherit"}
          >
            newsletter!
          </chakra.span>
        </Heading>
        <InputGroup>
          <InputRightElement
            zIndex={20}
            position={"absolute"}
            right={3}
            top={"36%"}
          >
            <IconButton
              aria-label="btn"
              icon={<FaAngleRight />}
              boxSize={10}
              background={"primary"}
              color={"background"}
              _hover={{ filter: "brightness(110%)" }}
              _active={{
                transform: "scale(0.98)",
              }}
              rounded={"xl"}
              type="submit"
              isLoading={isSubmitting}
            />
          </InputRightElement>
          <Input
            id="email"
            type="email"
            {...register("email")}
            position={"relative"}
            placeholder="Enter your email"
            width={"100%"}
            height={"3.5rem"}
            mt={5}
            px={5}
            rounded={"xl"}
            fontSize={"2xl"}
            background={"background"}
            _focus={{
              background: "background",
              borderColor: "accent",
              zIndex: 11,
            }}
            _placeholder={{ color: "primary", background: "background" }}
            zIndex={10}
          />
        </InputGroup>
      </FormControl>
    </form>
  );
}
