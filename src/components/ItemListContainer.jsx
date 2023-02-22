import ItemList from "./ItemList";
import { Center } from "@chakra-ui/react";
const ItemListContainer = () => {
  return (
    <div>
      <Center bg="#D6EAF8" fontSize="4xl" color="clack">
        Car Catalogue
      </Center>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
