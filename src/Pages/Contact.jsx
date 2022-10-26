import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Textarea } from '@chakra-ui/react'
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const YOUR_SERVICE_ID = "service_d5txham";
  const YOUR_TEMPLATE_ID = "template_pokrdf7";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        "stx2o-M5nXB8mIR5H"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("email send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box w="100%" mb={{base:"200px",sm:"150px",md:"100px",lg:"30px"}}>
      <Box textAlign={"center"}>
        <Text fontWeight={"bold"} fontSize="23px" textDecoration={"underline"}>
          Contact Me
        </Text>
      </Box>
      <Box textAlign={"center"} mb="30px">
        --Get in Touch--
      </Box>

      <Flex w="90%" m="auto" gap="30px" flexDirection={{base:"column",sm:"column",md:"row",lg:"row"}} fontSize={{base:"14px",sm:"15px"}}>
        {/* left */}
        <Box w={{base:"90%",sm:"90%",md:"50%"}} m="auto"  height={"380px"}>
       

          <Box mb="20px" textAlign={"left"}  mt="10px">
            Got a project? Reach out and let's work together on something
            exciting.
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
        <Box border="1px solid #cf3c58" w={{base:"90%",sm:"90%",md:"50%"}} borderRadius={"10px"} m="auto" height={"370px"} >
          <Box mb="20px"><Text fontWeight={"500"} mt="10px">Message me</Text></Box>
          <form ref={form} onSubmit={sendEmail}>
            <Box display="flex"  width={"80%"} alignItems="center" gap="20px"  m="auto" mb="10px">
              <Box width={"50%"} m="auto">
                <Input
                border="1px solid #cf3c58"
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                />
              </Box>
              <Box width={"50%"} m="auto">
                <Input type="email" name="email" placeholder="Email" required />
              </Box>
            </Box>

            <Box w="80%" m="auto" mb="10px">
              <Input
              border="1px solid #cf3c58"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </Box>
            <Box w="">
              <Textarea
              border="1px solid #cf3c58"
              w="80%"
                cols="30"
                rows="5"
                name="message"
                placeholder="Message.."
                required
              ></Textarea>
            </Box>
            <Box>
              <Button size={{base:"sm",sm:"md"}} color="white"  mt={"20px"} bg={" #cf3c58"} type="submit">
                Send message
              </Button>
            </Box>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
export default Contact;
