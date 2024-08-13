import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { MdDone } from "react-icons/md";
import { PiListStar } from "react-icons/pi";

const Filters = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('left')

  const Slides = ({ icon, text }) => {
    return (
      <Flex
        alignItems={"center"}
        gap={"12px"}
        cursor={"pointer"}
        _hover={{ backgroundColor: "grey", color: "white" }}
        p={"12px"}
      >
        <Box>{icon}</Box>
        <Text>{text}</Text>
      </Flex>
    );
  };
  return (
    <Box>
      {/* ********************Laptop Screen************************/}
      <Box
        color={"#C7C7C7"}
        bgColor={"#212121"}
        minH={"100%"}
        py={"20px"}
        borderRight={"2px solid grey"}
        display={["none", "none", "none", "block"]}
      >
        <Heading
          color={"white"}
          fontSize={"26px"}
          mb={"40px"}
          p={"14px"}
          fontFamily={'"Nunito", sans-serif'}
        >
          Task Master 💀
        </Heading>
        <SimpleGrid alignContent={"start"} gap={"20px"}>
          <Slides icon={<AiFillHome />} text={"All Tasks"} />
          <Slides icon={<PiListStar />} text={"Important!"} />
          <Slides icon={<MdDone />} text={"Completed"} />
          <Slides icon={<GiSandsOfTime />} text={"Incomplete"} />
        </SimpleGrid>
      </Box>

{/* ************************Small Screen***************************** */}
<Flex justifyContent={"space-between"}  p={'5px'} display={["flex", "flex", "flex", "none"]}>

<Heading
          color={"white"}
          fontSize={"26px"}
          fontFamily={'"Nunito", sans-serif'}
          >
          Task Master 💀
        </Heading>

      
<Button colorScheme='white' onClick={onOpen} >
<HamburgerIcon/>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent color={"#C7C7C7"}
        bgColor={"#212121"}>
          <DrawerHeader borderBottomWidth='1px'>  Task Master 💀</DrawerHeader>
          <DrawerBody >
          <Box
        py={"20px"}
      >
        <SimpleGrid alignContent={"start"} gap={"20px"}>
          <Slides icon={<AiFillHome />} text={"All Tasks"} />
          <Slides icon={<PiListStar />} text={"Important!"} />
          <Slides icon={<MdDone />} text={"Completed"} />
          <Slides icon={<GiSandsOfTime />} text={"Incomplete"} />
        </SimpleGrid>
      </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

          </Flex>
    </Box>
  );
};

export default Filters;
