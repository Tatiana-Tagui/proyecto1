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
  Grid,
} from "@chakra-ui/react";
import imgUrl from "../assets/car.jpg";
const ItemList = () => {
  const car = [];

  return (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={10} //separación de las tarjetas
        justify="center" //centrar tarjetas
        margin="10rem" //separar los margenes
        marginTop="3rem" //separar el margen superior del titulo
        display="flex"
      >
        <Card id="car">
          <CardBody>
            <Image src={imgUrl} alt="Svartifoss Waterfall" borderRadius="lg" />
            <Stack mt="20" spacing="15">
              <Heading size="lg">FORD</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                nobis illum voluptatem, nisi voluptate minima!
              </Text>
              <Text color="blue.600" fontSize="4xl">
                $4.500.000
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

        <Card id="car">
          <CardBody>
            <Image
              src={imgUrl}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="20" spacing="15">
              <Heading size="lg">PEUGEOT</Heading>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo atque mollitia corrupti vitae repellat ratione.
              </Text>
              <Text color="blue.600" fontSize="4xl">
                $5.000.000
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

        <Card id="car">
          <CardBody>
            <Image
              src={imgUrl}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="20" spacing="15">
              <Heading size="lg">TOYOTA</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                facere tempora soluta aspernatur quidem ullam!
              </Text>
              <Text color="blue.600" fontSize="4xl">
                $7.500.000
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
      </Grid>
    </>
  );
};

export default ItemList;
