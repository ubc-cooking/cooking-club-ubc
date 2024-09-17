"use client";

import { useForm } from "react-hook-form";
import { Box, Text, Input, Textarea, Button, Flex } from "@chakra-ui/react";
import { FaArrowTurnUp } from "react-icons/fa6";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export function Form() {
    const {register, handleSubmit, setValue} = useForm();
    const inputMargins = 1      // margins for the inputs

    // for captcha
    const onHCaptchaChange = (token: any) => {
        setValue("h-captcha-response", token);
      };

    // web3forms submit
    async function submitForm(data: any) {
        data.access_key = "ACCESS_KEY_HERE"
        const jsonData = JSON.stringify(data)

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: jsonData,
        });
        
        const result = await response.json();
        if (result.success) {
            // on success
        }
    }  
    

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
                    
                    <Input size='md' placeholder="Name" margin={inputMargins} outlineColor='accent' {...register("name", {required: true})}/>
                    <Input size='md' placeholder="Email" type="email" margin={inputMargins} outlineColor='accent' {...register("email", {required: true})} />
                    <Textarea size='md' placeholder="Message" height={180} margin={inputMargins} outlineColor='accent' {...register("message", {required: true})}/>
                    <Flex flexDirection='column' placeContent='center'>
                        <HCaptcha
                            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                            reCaptchaCompat={false}
                            onVerify={onHCaptchaChange}
                        />
                    </Flex>
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