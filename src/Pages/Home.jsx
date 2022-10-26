import React from "react";
import Typewriter from "typewriter-effect";

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const pic1 ="final-pic.jpg"
const Home = () => {
  return (
    <Box  width="100%" mt="200px" mb="100px">
      <Flex w="80%" m="auto" alignItems={"center"} gap="20px" direction={{base:"column-reverse",sm:"column-reverse",md:"row"}}>
        <Box width={{base:"90%",sm:"50%"}} m="auto" h="280px" pt="20px">
          <Box>
            <Text
              color={"#cf3c58 "}
              fontSize={{ base: "22px", sm: "24px", md: "26px", lg: "27px" }}
              fontWeight="bold"
            >
              Hi, 👋
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "22px", sm: "24px", md: "26px", lg: "26px" }}
              fontWeight="bold"
            >
              I'm Swati Kushwaha
            </Text>
          </Box>
          <Box
            color={"#cf3c58"}
            fontSize={{ base: "16px", sm: "17px", md: "18px", lg: "19px" }}
            fontWeight="bold"
          >
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: ["a Coder", "a MERN Developer"],
              }}
            />
          </Box>

          <Box textAlign={"center"}  mt="20px" >
            <Text
              fontSize="18px"
              fontWeight="bold"
              mb="10px"
            >
              Connect with me here
            </Text>
            <Box display={"flex"} gap="20px" justifyContent={"center"}>
              <a
                href="https://www.linkedin.com/in/swati-kushwaha--profile/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin color="#0274b3" fontSize={"25px"} />
              </a>
              <a
                href="https://github.com/Swati863"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub fontSize={"25px"} />
              </a>
            </Box>
          </Box>

          <Button bg={"#cf3c58"} size={{base:"sm",sm:"sm",md:"md"}} mt={"20px"}>
            <a href="https://drive.google.com/file/d/1pYPIDAlmHd2xsZrrUZ7mNveWrkORSMWm/view" target="_blank" download rel="noreferrer">
              Resume
            </a>
          </Button>
        </Box>

        <Box width={{base:"90%",sm:"50%"}} h={{base:"250px",sm:"320px"}} >
          <Image
            w={{base:"250px",sm:"350px"}}
            height="100%"
            m="auto"
            borderRadius={"48%"}
            src={pic1}
            alt="swati-pic"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
