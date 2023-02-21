import {
  Card,
  CardBody,
  Stack,
  Divider,
  Heading,
  Text,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import imgUrl from "../assets/car.jpg";
const ItemList = () => {
  const car = [
    {
      id: 1,
      nombre: "Car 1",
      price: 1200200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A velit, asperiores dolor voluptatibus facere veniam recusandae fugit praesentium quis et",
    },
    {
      id: 2,
      nombre: "Car 2",
      price: 1200200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A velit, asperiores dolor voluptatibus facere veniam recusandae fugit praesentium quis et",
    },
    {
      id: 3,
      nombre: "Car 3",
      price: 1200200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A velit, asperiores dolor voluptatibus facere veniam recusandae fugit praesentium quis et",
    },
    {
      id: 4,
      nombre: "Car 4",
      price: 1200200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A velit, asperiores dolor voluptatibus facere veniam recusandae fugit praesentium quis et",
    },
    {
      id: 5,
      nombre: "Car 5",
      price: 1200200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A velit, asperiores dolor voluptatibus facere veniam recusandae fugit praesentium quis et",
    },
    {
      id: 6,
      nombre: "Car 6",
      price: 1200200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A velit, asperiores dolor voluptatibus facere veniam recusandae fugit praesentium quis et",
    },
  ];

  return (
    <>
      <Card id="car" maxW="sm">
        <CardBody>
          <Image
            src={imgUrl}
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
            <Button variant="solid">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card id="car" maxW="sm">
        <CardBody>
          <Image
            src={imgUrl}
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
            <Button variant="solid">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card id="car" maxW="sm">
        <CardBody>
          <Image
            src={imgUrl}
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
            <Button variant="solid">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card id="car" maxW="sm">
        <CardBody>
          <Image
            src={imgUrl}
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
            <Button variant="solid">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card id="car" maxW="sm">
        <CardBody>
          <Image
            src={imgUrl}
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
            <Button variant="solid">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card id="car" maxW="sm">
        <CardBody>
          <Image
            src={imgUrl}
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
            <Button variant="solid">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default ItemList;
