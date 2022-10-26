import { Box, Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const pro1= "antro11.png";
const pro2="khel1.png";
const pro3="toogle.png"

const Project = () => {
  return (
    <Box  width={"100%"}>
      <Box ><Text fontSize="35px" textDecoration={"underline"} fontWeight="bold" mb="30px">Projects</Text></Box>

<SimpleGrid columns={[1,1,1,2,2]} w={{base:"85%"}} m="auto" gap="20px">

<Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"  border="" borderRadius="15px">
  <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="250px" w="100%" src={pro1} alt="" />
  <Box mt="10px" mb="10px" ><Text fontWeight="bold">Anthropology-Clone</Text></Box>
  <Box padding={"10px"} textAlign="center">Cloned Anthropologie is an American clothing retailer store. They
offer a unique collection of women's clothing.
</Box>
  <Box >
 
    <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px" >
      <Box><Image w={{base:"30px"}}  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" /></Box>
      <Box><Image w={{base:"30px"}}  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" /></Box>
      <Box><Image w={{base:"30px"}}  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
      <Image  w={{base:"30px"}} alt="imagenotfound"src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" />
    </Flex>
  </Box>

<Box display="flex"justifyContent="space-around" alignItems="center" mt="5px" mb="5px" >
  <Flex gap="150px" alignItems="center">
    <Box ><a href='https://github.com/Swati863/anthropologie' target="_blank" rel="noreferrer" ><Button  variant="unstyled"><FaGithub fontSize={"25px"}/></Button></a></Box>
    <Box ><a href=' https://hitendra-anthropologie-clone.netlify.app/' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
  </Flex>
  </Box>

</Box>




<Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" border="" borderRadius="15px">
  <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="250px" w="100%" src={pro2} alt="" />
  <Box mt="10px" mb="10px" ><Text fontWeight="bold">Kheliya Toys-Clone</Text></Box>
  <Box padding={"10px"} textAlign="center">Cloned Kheliya Toys is an online toy store where you can buy toys
online in India without worrying about the quality of the products.</Box>
  <Box>
 
    <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
    <Box><Image   w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" /></Box>
      <Box><Image   w={{base:"30px"}}src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" /></Box>
      <Box><Image   w={{base:"30px"}}src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
      <Image  w={{base:"30px"}} alt="imagenotfound"src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" />
    </Flex>
  </Box >
  <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
    <Box ><a href="https://github.com/Swati863/Kheliya_Clone" target="_blank" rel="noreferrer" ><Button  variant="unstyled"><FaGithub fontSize={"25px"}/></Button></a></Box>
    <Box ><a href='https://frolicking-mochi-78d43d.netlify.app/index.html' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
  </Flex>
</Box>

<Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" border="" borderRadius="15px">
  <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="250px" w="100%" src={pro3} alt="giticon" />
 <Box mt="10px" mb="10px" ><Text fontWeight="bold">Toogle-Track - Clone</Text></Box> 
  <Box padding={"10px"} textAlign="center">Toggl Track is a time tracking app that allows you to track your daily activities across different platforms; providing you with detailed insights and an opportunity to optimize your workflow by identifying areas where you can improve.
</Box>
  <Box>
 
    <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
    <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
      <Box>
          <Image  w={{base:"30px"}} alt="React"src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
        </Box>
        <Box>
          <Image  w={{base:"30px"}} alt="imagenotfound"src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" />
        </Box>
        <Box>
          <Image  w={{base:"30px"}} alt="imagenotfound"src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
        </Box>
    </Flex>
  </Box>
  <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px"> 
    <Box ><a href='https://github.com/Swati863/toogle-track' target="_blank" rel="noreferrer" ><Button  variant="unstyled"><FaGithub fontSize={"25px"}/></Button></a></Box>
    <Box > <a href='https://toggl-time-tracking.vercel.app/' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
  </Flex>
</Box>







    





</SimpleGrid>



    </Box>
  )
}

export default Project