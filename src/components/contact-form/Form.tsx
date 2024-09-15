"use client";

import { useForm } from "react-hook-form";
import { Box, Text, Input, Textarea, Button, Flex } from "@chakra-ui/react";

export function Form() {
    const {register, handleSubmit} = useForm();
    const inputMargins = 1
    const submitForm = ((data: any) => {
        console.log(data) // EMAIL LOGIC HERE
    })  
    

    return (
        <Box 
            borderRadius='10px' 
            width='50%'
            marginLeft='100px'
            backgroundColor='accent'
            p={10}>
            <form onSubmit={handleSubmit(submitForm)}>
                <Flex alignItems='center' marginLeft='20px'>
                    <Text fontWeight="bold">To:&nbsp;</Text>
                    <Text bg='#7BB1DE' padding='3px' borderRadius='3px' as='u' margin={inputMargins}>ubccookingclubinfo@gmail.com</Text>
                </Flex>
                <Input size='md' placeholder="Email" type="email" margin={inputMargins} outlineColor='accent' {...register("email", {required: true})} />
                <Input size='md' placeholder="Subject" margin={inputMargins} outlineColor='accent' {...register("subject", {required: true})}/>
                <Textarea size='md' placeholder="Your message" height={200} margin={inputMargins} outlineColor='accent' {...register("message", {required: true})}/>
                <Button type="submit" 
                borderRadius='20px' 
                backgroundColor='primary' 
                color='background' 
                width='100%'
                margin={inputMargins}
                _hover={{ bg: '#295ea6' }}>Send to the Kitchen!</Button>
            </form>
        </Box>
    )
}