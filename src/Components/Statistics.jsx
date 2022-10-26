import { Box, Flex, Heading, Icon, Progress, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { DiHtml53DEffects } from "react-icons/di";
import { FaAlgolia } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { SiRedux, SiTypescript, SiDatabricks } from "react-icons/si";

import React from "react";

const Skills = () => {
  return (
    <Box minW="100%" h="auto" pt="4rem">
      <Heading textAlign="center" >
        Statistics
      </Heading>
      <Box w="70%" m="auto" mt="4rem">
        <Flex
          direction={{ base: "column", xl: "row" }}
          alignItems={{ base: "center" }}
        >
          <Box w={{ base: "100%", lg: "50%" }}>
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight={"400"} fontSize={{base:"18px",sm:"20px",md:"22px",lg:"24px"}}>
                      <Icon
                        as={DiHtml53DEffects}
                        w="30px"
                        h="30px"
                        pt="0.4rem"
                        color="#06d6a0"
                      />
                      Tech Skills
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text textAlign="start" fontSize={{base:"16px",sm:"18px",md:"22px",lg:"24px"}}>
                    <Icon
                      color="#06d6a0"
                      as={AiFillHtml5}
                      w={5}
                      h={5}
                      mr="0.4rem"
                    />
                    HTML
                  </Text>
                  <Progress colorScheme='green' value={64} />
                  <Text textAlign="start" fontSize={{base:"16px",sm:"18px",md:"22px",lg:"24px"}}>
                    <Icon color="#06d6a0" as={DiCss3} w={5} h={5} mr="0.4rem" />
                    CSS
                  </Text>
                  <Progress colorScheme='green' value={54} />
                  <Text textAlign="start" fontSize={{base:"16px",sm:"18px",md:"22px",lg:"24px"}}>
                    <Icon
                      color="#06d6a0"
                      as={IoLogoJavascript}
                      w={5}
                      h={5}
                      mr="0.4rem"
                    />
                    JavaScript
                  </Text>
                  <Progress colorScheme='green' value={52} />
                  <Text textAlign="start" fontSize={{base:"16px",sm:"18px",md:"22px",lg:"24px"}}>
                    <Icon
                      color="#06d6a0"
                      as={DiReact}
                      w={5}
                      h={5}
                      mr="0.4rem"
                    />
                    ReactJS
                  </Text>
                  <Progress colorScheme='green' value={51} />
                  <Text textAlign="start" fontSize={{base:"16px",sm:"18px",md:"22px",lg:"24px"}}>
                    <Icon
                      color="#06d6a0"
                      as={SiRedux}
                      w={5}
                      h={5}
                      mr="0.4rem"
                    />
                    Redux
                  </Text>
                  <Progress colorScheme='green' value={50} />
                 
                  <Text textAlign="start" fontSize={{base:"16px",sm:"18px",md:"22px",lg:"24px"}}>
                    <Icon
                      color="#06d6a0"
                      as={AiFillGithub}
                      w={5}
                      h={5}
                      mr="0.4rem"
                    />
                    GitHub
                  </Text>
                  <Progress colorScheme='green' value={56} />
                  <Text textAlign="start" fontSize={{base:"16px",sm:"18px",md:"22px",lg:"24px"}}>
                    <Icon
                      color="#06d6a0"
                      as={AiFillHtml5}
                      w={5}
                      h={5}
                      mr="0.4rem"
                    />
                    NodeJS
                  </Text>
                  <Progress colorScheme='green' value={50} />
                  <Text textAlign="start" fontSize={{base:"16px",sm:"18px",md:"22px",lg:"24px"}}>
                    <Icon
                      color="#06d6a0"
                      as={AiFillHtml5}
                      w={5}
                      h={5}
                      mr="0.4rem"
                    />
                    Express
                  </Text>
                  <Progress colorScheme='green' value={50} />
                  <Text textAlign="start" fontSize={{base:"16px",sm:"18px",md:"22px",lg:"24px"}}>
                    <Icon
                      color="#06d6a0"
                      as={AiFillHtml5}
                      w={5}
                      h={5}
                      mr="0.4rem"
                    />
                    MongoDB
                  </Text>
                  <Progress colorScheme='green' value={50} />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box w={{ base: "100%", lg: "50%" }}>
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight={"400"} fontSize={{base:"18px",sm:"20px",md:"22px",lg:"24px"}}>
                      <Icon
                        color="#06d6a0"
                        as={FaAlgolia}
                        w="30px"
                        h="30px"
                        pt="0.4rem"
                      />
                       Data Structures and Algorithms 
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text textAlign="start" fontSize={{base:"16px",sm:"18px",md:"22px",lg:"24px"}}>
                    <Icon
                      color="#06d6a0"
                      as={FaAlgolia}
                      w="30px"
                      h="30px"
                      pt="0.4rem"
                    />
                    Algorithms
                  </Text>
                  <Progress colorScheme='green' value={54} />
                  <Text textAlign="start" fontSize={{base:"16px",sm:"18px",md:"22px",lg:"24px"}}>
                    <Icon
                      color="#06d6a0"
                      as={SiDatabricks}
                      w="30px"
                      h="30px"
                      pt="0.4rem"
                    />
                    Data Structures
                  </Text>
                  <Progress colorScheme='green' value={44} />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>

        
      </Box>
    </Box>
  );
};

export default Skills;
