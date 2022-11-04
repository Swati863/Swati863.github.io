import { Box, Text } from "@chakra-ui/react";
import React from "react";


const About = () => {
  return (
    <Box w="100%"
      height={{base:"370px",sm:"330px",md:"300px"}} 
       mt="300px" mb="130px"   >
      <Box w={{base:"80%",sm:"80%",md:"75%"}}  paddingBottom={"30px"}  m="auto" textAlign={"center"}>
        <Text fontWeight={"bold"} fontSize="35px" textDecoration={"underline"} color={"#cf3c58"} >
          About Me
        </Text>
      </Box>
      <Box w={{base:"80%",sm:"80%",md:"75%"}} mb="10px"  m="auto">
        <Text fontWeight={"bold"} fontSize="25px" textAlign="left" pb="0" pl="20px" pr="20px">
          {" "}
          I'm Swati Kushwaha
        </Text>
      </Box>
      <Box w={{base:"80%",sm:"80%",md:"75%"}} mb="10px"  m="auto" pt="0" pl="20px" pr="20px" >
        <Text textAlign={"left"} fontSize="20px">
      Aspiring Full-Stack developer who is proficient in both Front- end and Back-end frameworks.
       Dedicated to developing robust interactive application.
        I am collaborative,a team player with great communication skills,and someone who loves to develop the websites using mern stack.
         Looking forward to showcasing and utilize current skillset and experience of working on projects to grow and achieve organizational goals.
        </Text>
        {/* <Box></Box> */}
      </Box>
    </Box>
  );
};

export default About;
