import { Box, Image, SimpleGrid, Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Statistics from "../Components/Statistics";
import GitHubCalendar from 'react-github-calendar';



const Skills = () => {

  
  return (
    <Box w="100%"   backgroundColor= "rgb(247, 232, 232)">
      <Box>
        <Text fontWeight={"bold"} fontSize="38px" mb="30px" textDecoration={"underline"} color={"#cf3c58"} >Skills</Text>
      </Box>
      




  {/* <SimpleGrid
        columns={[2, 3, 4]}
        gap="20px"
        w={{ base: "80%", sm: "80%", md: "80%" }}
        margin="auto"
        border="1px solid black"
      >
        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            alt="not-found"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          />
        </Box>
        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            alt="not-found"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          />
        </Box>
        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            alt="not-found"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          />
        </Box>
        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            alt="not-found"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          />
        </Box>
        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            alt="not-found"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
          />
        </Box>
        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            alt="not-found"
            src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"
          />
        </Box>
        
        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/logo-data-structure.png"
            alt="not-found"
          />
        </Box>
        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
            alt="not-found"
          />
        </Box>
        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            alt="not-found"
            src="data:image/jpeg;base64,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"
          />
        </Box>
      </SimpleGrid> */}
    


{/* front end */}
<Box>
  <Box><Text fontSize="22px"  fontWeight="bold" mb="30px" mt="20px" color={" rgb(247, 232, 232)"}>Frontend</Text></Box>
<SimpleGrid
      columns={[2, 3, 4]}
      gap="20px"
      w={{ base: "80%", sm: "80%", md: "80%" }}
      margin="auto"
     
    >
      <Box
        w={{ base: "80px", sm: "80px", md: "100px" }}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        p="10px"
        h={{ base: "80px", sm: "80px", md: "100px" }}
        m="auto"
        backgroundColor={"white"}
        borderRadius="10px"
      >
        <Image
          display="block"
          w="100%"
          m="auto"
          alt="not-found"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
        />
      </Box>
      <Box
        w={{ base: "80px", sm: "80px", md: "100px" }}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        p="10px"
        h={{ base: "80px", sm: "80px", md: "100px" }}
        m="auto"
        backgroundColor={"white"}
        borderRadius="10px"
      >
        <Image
          display="block"
          w="100%"
          m="auto"
          alt="not-found"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
        />
      </Box>
      <Box
        w={{ base: "80px", sm: "80px", md: "100px" }}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        p="10px"
        h={{ base: "80px", sm: "80px", md: "100px" }}
        m="auto"
        backgroundColor={"white"}
        borderRadius="10px"
      >
        <Image
          display="block"
          w="100%"
          m="auto"
          alt="not-found"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        />
      </Box>
      <Box
        w={{ base: "80px", sm: "80px", md: "100px" }}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        p="10px"
        h={{ base: "80px", sm: "80px", md: "100px" }}
        m="auto"
        backgroundColor={"white"}
        borderRadius="10px"
      >
        <Image
          display="block"
          w="100%"
          m="auto"
          alt="not-found"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        />
      </Box>
      <Box
        w={{ base: "80px", sm: "80px", md: "100px" }}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        p="10px"
        h={{ base: "80px", sm: "80px", md: "100px" }}
        m="auto"
        backgroundColor={"white"}
        borderRadius="10px"
      >
        <Image
          display="block"
          w="100%"
          m="auto"
          alt="not-found"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
        />
      </Box>
      <Box
        w={{ base: "80px", sm: "80px", md: "100px" }}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        p="10px"
        h={{ base: "80px", sm: "80px", md: "100px" }}
        m="auto"
        backgroundColor={"white"}
        borderRadius="10px"
      >
        <Image
          display="block"
          w="100%"
          m="auto"
          alt="not-found"
          src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"
        />
      </Box>
     
    
      <Box
        w={{ base: "80px", sm: "80px", md: "100px" }}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        p="10px"
        h={{ base: "80px", sm: "80px", md: "100px" }}
        m="auto"
        backgroundColor={"white"}
        borderRadius="10px"
      >
        <Image
          display="block"
          w="100%"
          m="auto"
          src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/logo-data-structure.png"
          alt="not-found"
        />
      </Box>
      
      <Box
        w={{ base: "80px", sm: "80px", md: "100px" }}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        p="10px"
        h={{ base: "80px", sm: "80px", md: "100px" }}
        m="auto"
        backgroundColor={"white"}
        borderRadius="10px"
      >
        <Image
          display="block"
          w="100%"
          m="auto"
          alt="not-found"
          src="data:image/jpeg;base64,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"
        />
      </Box>
    </SimpleGrid>
</Box>
   
    {/*  Backend */}

    <Box>
      <Box><Text fontSize="22px"  fontWeight="bold" mb="30px" mt="20px" color={" rgb(247, 232, 232)"}>Backend</Text></Box>
      <SimpleGrid columns={[2, 3, 4]} 
        gap="20px"
        w={{ base: "80%", sm: "80%", md: "80%" }}
        margin="auto"
        >
        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
          backgroundColor={"white"}
          borderRadius="10px"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            src="https://www.svgrepo.com/show/303360/nodejs-logo.svg"
            alt="not-found"
          />
        </Box>
        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
          backgroundColor={"white"}
          borderRadius="10px"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
            alt="not-found"
          />
        </Box>
        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
          backgroundColor={"white"}
          borderRadius="10px"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
            alt="not-found"
          />
        </Box>
        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
          backgroundColor={"white"}
          borderRadius="10px"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png"
            alt="not-found"
          />
        </Box>

        <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          m="auto"
          backgroundColor={"white"}
          borderRadius="10px"
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8"
            alt="not-found"
          />
        </Box>
        
       
        </SimpleGrid>
    </Box>


{/* DSA */}

    {/* <Box>
      <Box><Text fontSize="22px"  fontWeight="bold" mb="30px" mt="20px">Data Structures & Algorithm</Text></Box>
      <Box display="flex" w={{ base: "80%", sm: "80%", md: "80%" }} 
      margin="auto"
      >
        
      <Box
          w={{ base: "80px", sm: "80px", md: "100px" }}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          p="10px"
          m="auto"
          h={{ base: "80px", sm: "80px", md: "100px" }}
          
          
          
        >
          <Image
            display="block"
            w="100%"
            m="auto"
            src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/logo-data-structure.png"
            alt="not-found"
          />
        </Box>
        

      </Box>
    </Box> */}
    

    {/* <Statistics/> */}
    <Text fontWeight="bold" mt="30px" fontSize={{base:"18px",sm:"20px",md:"22px",lg:"28px"}} mb="30px"  textAlign="center" color={"#cf3c58"} >
        Statistics
      </Text>
      
      <Box w="80%" m="auto">

        <Flex justifyContent={"space-around"} mb="15px" direction={{base:"column",sm:"row"}} gap={{base:"20px"}}>
        <Box w="65%" maxH={"140px"} m="auto"> <Image m="auto" w="90%" h={"100%"} align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Swati863&layout=compact&hide=Shell&border_radius=0" alt="Swati863" /></Box>
        <Box w="65%" maxH={"140px"} m="auto"> <Image m="auto" w="90%" h="100%"src="https://github-readme-streak-stats.herokuapp.com/?user=Swati863&hide_border=false"/> </Box>
        </Flex>

        
        <Box w="65%" m="auto" ><Image m="auto"mt={{lg:"100px"}} w="100%" height={{base:"100px",sm:"140px"}} align="center" src="https://github-readme-stats.vercel.app/api?username=Swati863&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en" alt=""  /></Box>
      
            




  

    <Box width="80%" m="auto" mt={{base:"0px",sm:"0px",md:"20px"}} paddingBottom="20px" >  <GitHubCalendar username="Swati863" style={{width:"100%",margin:"auto"}}    /></Box>
        </Box>
    
    </Box>
  );
};

export default Skills;
