"use client";

import { useForm } from "react-hook-form";
import { Box, Text, Input, Textarea, Button, Flex } from "@chakra-ui/react";
import { FaArrowTurnUp } from "react-icons/fa6";

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
            marginLeft='80px'
            p={10}>
            <form onSubmit={handleSubmit(submitForm)}>
                <Box 
                backgroundColor='accent'
                padding='20px'
                borderRadius='30px'
                marginBottom='10px'>
                    <Flex alignItems='center' marginLeft='20px'>
                        <Text fontWeight="bold">To:&nbsp;</Text>
                        <Text bg='#7BB1DE' padding='5px 10px' borderRadius='7px' as='u' margin={inputMargins}>ubccookingclubinfo@gmail.com</Text>
                    </Flex>
                    <Input size='md' placeholder="Email" type="email" margin={inputMargins} outlineColor='accent' {...register("email", {required: true})} />
                    <Input size='md' placeholder="Subject" margin={inputMargins} outlineColor='accent' {...register("subject", {required: true})}/>
                    <Textarea size='md' placeholder="Your message" height={180} margin={inputMargins} outlineColor='accent' {...register("message", {required: true})}/>
                </Box>
                <Button type="submit" 
                borderRadius='20px' 
                backgroundColor='primary' 
                color='background' 
                width='100%'
                margin={inputMargins}
                rightIcon={<FaArrowTurnUp style={{transform: 'rotate(90deg)' }}/>}
                _hover={{ bg: '#295ea6' }}>
                    Send to the Kitchen!
                </Button>
            </form>
        </Box>
    )
}