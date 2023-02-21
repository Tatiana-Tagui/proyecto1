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
  Card,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <>
      <Container maxW="100rem" bg="blue.100" color="#262626">
        <Flex alignContent="center" gap="2">
          <Box p="2" color="white">
            <Heading size="md">E-commerce</Heading>
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
              <MenuItem>Category 1</MenuItem>
              <MenuItem>Category 2</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default NavBar;
