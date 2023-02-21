import ItemList from "./ItemList";
import { Center } from "@chakra-ui/react";
const ItemListContainer = ({ greeting, saludos }) => {
  return (
    <div>
      <Center bg="#D6EAF8" h="100px" color="clack">
        Car Catalogue
      </Center>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
