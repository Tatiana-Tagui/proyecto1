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
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Card id="car" maxW="sm">
          <CardBody>
            <Image
              src={imgUrl}
              alt="Green double couch with wooden leg"
              borderRadius="lg"
            />
            <Stack mt="20" spacing="15">
              <Heading size="lg">FORD</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
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

        <Card id="car" maxW="sm">
          <CardBody>
            <Image
              src={imgUrl}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="20" spacing="15">
              <Heading size="lg">PEUGEOT</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
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

        <Card id="car" maxW="sm">
          <CardBody>
            <Image
              src={imgUrl}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="20" spacing="15">
              <Heading size="lg">TOYOTA</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
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
        <Card id="car" maxW="sm">
          <CardBody>
            <Image
              src={imgUrl}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="20" spacing="15">
              <Heading size="lg">FORD</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="4xl">
                $6.700.000
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
            <Stack mt="20" spacing="15">
              <Heading size="lg">HONDA</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="4xl">
                $8.200.000
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
            <Stack mt="20" spacing="15">
              <Heading size="lg">CHEVROLET</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="4xl">
                $3.500.000
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
            <Stack mt="20" spacing="15">
              <Heading size="lg">TOYOTA</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="4xl">
                $9.900.000
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
            <Stack mt="20" spacing="15">
              <Heading size="lg">VOLKSWAGEN</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="4xl">
                $3.700.000
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
            <Stack mt="20" spacing="15">
              <Heading size="lg">FORD</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="4xl">
                $6.500.500
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
            <Stack mt="20" spacing="15">
              <Heading size="lg">VOLKSWAGEN</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="4xl">
                $4.300.000
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
