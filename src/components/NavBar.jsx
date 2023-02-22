import CartWidget from "./CartWidget";
import {
  Container,
  Flex,
  Spacer,
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <>
      <Container maxW="100rem" bg="blue.100" color="#262626">
        <Flex alignContent="center" gap="2">
          <Box p="2" color="white">
            <Heading size="md">Automotores Tagui</Heading>
          </Box>
          <Spacer />
          <Box p="2" color="white">
            <CartWidget />
          </Box>
        </Flex>
      </Container>

      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {isOpen ? "Ocultar" : "Categorias"}
            </MenuButton>
            <MenuList>
              <MenuItem>Usado</MenuItem>
              <MenuItem>Okm</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
};

export default NavBar;
