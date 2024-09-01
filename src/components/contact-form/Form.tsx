"use client";

import theme from "../../theme/index"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Text, Input, Textarea, Button } from "@chakra-ui/react";

export function Form() {
    const {register, handleSubmit} = useForm();
    //const [data, setData] = useState();
    const inputMargins = 1
    const submitForm = ((data: any) => {
        console.log(data) // EMAIL LOGIC HERE
    })  
    

    return (
        <Box 
            borderRadius='10px' 
            width='40%' 
            margin='auto' 
            backgroundColor='accent'
            p={10}>
            <form onSubmit={handleSubmit(submitForm)}>
                <Text>To: <span>ubccookingclubinfo@gmail.com</span></Text>
                <Input size='md' placeholder="Email" type="email" margin={inputMargins} {...register("Email", {required: true})} />
                <Input size='md' placeholder="Subject" margin={inputMargins} {...register("Subject", {required: true})}/>
                <Textarea size='md' placeholder="Your message" height={200} margin={inputMargins} {...register("Your message", {required: true})}/>
                <Button type="submit" 
                borderRadius='20px' 
                backgroundColor='primary' 
                color='background' 
                width='100%'
                margin={inputMargins}>Send to the Kitchen!</Button>
            </form>
        </Box>
    )
}