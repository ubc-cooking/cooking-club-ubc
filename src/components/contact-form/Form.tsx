"use client";

import theme from "../../theme/index"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Text, Input, Textarea, Button } from "@chakra-ui/react";

export function Form() {
    const {register, handleSubmit} = useForm();
    const [data, setData] = useState("");
    const inputMargins = 30

    return (
        <Box 
            borderRadius='10px' 
            width='40%' 
            margin='100px' 
            backgroundColor='accent'
            p={10}>
            <Text>To: <span><Text>ubccookingclubinfo@gmail.com</Text></span></Text>
            <Input size='md' placeholder="Email" />
            <Input size='md' placeholder="Subject" />
            <Textarea size='md' placeholder="Your message" height={200}/>

        </Box>
    )
}