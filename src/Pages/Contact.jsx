import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { Textarea } from '@chakra-ui/react'
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const img = "im-1.jpg"

const Contact = () => {


  return (
    <Box w="100%" mb={{base:"200px",sm:"150px",md:"100px",lg:"300px"}} color={"black"} backgroundColor= "rgb(247, 232, 232)" >
      <Box textAlign={"center"}>
        <Text fontWeight={"bold"} color={"#cf3c58"} fontSize="29px" textDecoration={"underline"}>
          Contact Me
        </Text>
      </Box>
      <Box textAlign={"center"} mb="30px">
        {/* --Get in Touch-- */}
      </Box>

      <Flex w="90%" m="auto" gap="30px" flexDirection={{base:"column",sm:"column",md:"row",lg:"row"}} fontSize={{base:"14px",sm:"15px"}}>
        {/* left */}
        <Box w={{base:"90%",sm:"90%",md:"50%"}} m="auto"  height={"380px"} pl="30px" pt="30px" >
       

          <Box mb="20px" textAlign={"left"}  mt="10px" fontWeight={"700"} fontSize="20px">
            Connect with me and let's work together on exciting Projects.
          </Box>

          <Box>
            <Box display={"flex"} gap="40px" alignItems={"center"} mb="25px">
              <FaEnvelope color={"#cf3c58"} size={"40px"} pl="30px" />
              <Box fontWeight={"500"}>
                <a href="mailto:swatikush@gmail.com">
                  swatikush.4@gmail.com
                </a>
              </Box>
            </Box>

            <Box display={"flex"} gap="40px" alignItems={"center"} mb="25px">
              <FaLinkedin color={"#cf3c58"} size={"40px"} />
              <Box fontWeight={"500"}>
                <a href="https://www.linkedin.com/in/swati-kushwaha--profile/">
                  Linkedin
                </a>
              </Box>
            </Box>

            <Box display={"flex"} gap="40px" alignItems={"center"} mb="25px">
              <FaGithub color={"#cf3c58"} size={"40px"} />
              <Box fontWeight={"500"}>
                <a href="https://github.com/Swati863">Github</a>
              </Box>
            </Box>

            <Box display={"flex"} gap="40px" alignItems={"center"} mb="25px">
              <MdCall color={"#cf3c58"} size={"40px"} />
              <Box fontWeight={"500"}>+91 8860897415</Box>
            </Box>
          </Box>
        </Box>

        {/* right */}
        <Box  w={{base:"90%",sm:"90%",md:"50%"}} borderRadius={"10px"} m="auto" height={"380px"} >
         
          <Image  src={img} width="600px" height="500px" borderRadius={"10px"} boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" ></Image>

          
        </Box>
      </Flex>
    </Box>
  );
};
export default Contact;
