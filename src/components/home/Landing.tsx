import { AspectRatio, Box } from "@chakra-ui/react";

export default function Landing() {
  return (
    <Box
      position={"sticky"}
      top={0}
      zIndex={-1}
      width={"100%"}
      height={"100vh"}
    >
      <AspectRatio maxW="100%" objectFit={"cover"} height={"100%"}>
        <video autoPlay muted loop id="myVideo" src="/home/landing.mp4">
          Your browser does not support HTML5 video.
        </video>
      </AspectRatio>
      <Box
        position={"absolute"}
        top={0}
        width={"100%"}
        height={"100%"}
        background={"rgb(255,249,225,40%)"}
      />
    </Box>
  );
}
