import React from "react";
import { NavLink, Link } from "react-router-dom";
// import styles from "../styles/Navbar.module.css";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  useColorMode,
  Box,
  Flex,
} from "@chakra-ui/react";

import { FaMoon, FaSun } from "react-icons/fa";

import { HamburgerIcon } from "@chakra-ui/icons";

// NavLinks
const baseStyle = {
  color: "black",
  textDecoration: "none",
};

const activeStyle = {
  color: "white",
  textDecoration: "none",
};

const Navbar = ({ projectsRef, infoRef, skillRef, contactRef, homeRef }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box w="100%">
      <Flex
        w="100%"
        alignItems="center"
        height="80px"
        margin="auto"
        position="fixed"
        top="1px"
        bg="#cf3c58"
        justifyContent={"space-between"}
        fontWeight="700"
        letterSpacing="1px"
      >
        <Box
          width={{ base: "70%", sm: "40%", md: "30%" }}
          fontSize={{base:"16px",sm:"18px",md:"24px"}}
          color="white"
          textAlign="left"
          paddingLeft="20px"
          fontWeight="bold"
          
        >
          <Link
            to="/"
            onClick={() => {
              handleScroll(homeRef.current);
            }}
            // style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Swati Kushwaha
          </Link>
        </Box>
        <Flex
          direction={"row"}
         
          width={{ base: "75%" }}
          display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
          alignItems="center"
          fontSize={{ base: "15px", sm: "16px", md: "19px" }}
          fontWeight="500"
          margin={"auto"}
          height="50px"
          justifyContent={"flex-end"}
          pr="70px"
          gap="30px"

        
        >
          <Box>
            {" "}
            <NavLink
              // className={styles.links}
              onClick={() => {
                handleScroll(homeRef.current);
              }}
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to={"/"}
            >
              Home
            </NavLink>
          </Box>
          <Box>
            {" "}
            <NavLink
              // className={styles.links}
              onClick={() => {
                handleScroll(infoRef.current);
              }}
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to={"/about"}
            >
              About
            </NavLink>
          </Box>
          <Box>
            <NavLink
              // className={styles.links}
              onClick={() => {
                handleScroll(skillRef.current);
              }}
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to={"/skills"}
            >
              Skills
            </NavLink>
          </Box>

          <Box>
            {" "}
            <NavLink
              // className={styles.links}
              onClick={() => {
                handleScroll(projectsRef.current);
              }}
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to={"/projects"}
            >
              Projects
            </NavLink>
          </Box>
          <Box>
            <NavLink
              // className={styles.links}
              onClick={() => {
                handleScroll(contactRef.current);
              }}
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to={"/contact"}
            >
              Contact 
            </NavLink>
          </Box>
          <Box>
            <Button variant={"ghost"} onClick={toggleColorMode}>
              {" "}
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </Button>
          </Box>
        </Flex>

        <Box
          display={{ base: "block", sm: "block", md: "block", lg: "none" }}
         
          pr="20px"
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="ghost"
            ></MenuButton>
            <MenuList border={"none"}>
              <MenuItem>
                <Link
                  onClick={() => {
                    handleScroll(infoRef.current);
                  }}
                  // style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                  to={"/"}
                >
                  About 
                </Link>
              </MenuItem>

              <Link
                // className={styles.links}
                onClick={() => {
                  handleScroll(skillRef.current);
                }}
                // style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to={"/skills"}
              >
                {" "}
                <MenuItem>Technical Skills</MenuItem>
              </Link>

              <Link
                onClick={() => {
                  handleScroll(projectsRef.current);
                }}
                // style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to={"/projects"}
              >
                <MenuItem>Projects</MenuItem>
              </Link>

              <Link
                onClick={() => {
                  handleScroll(contactRef.current);
                }}
                // style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to={"/contact"}
              >
                <MenuItem>Contact </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
