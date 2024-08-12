import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { MdDone } from "react-icons/md";
import { PiListStar } from "react-icons/pi";

const Filters = () => {
  const Slides = ({ icon, text }) => {
    return (
      <Flex alignItems={"center"} gap={'12px'} cursor={"pointer"} _hover={{backgroundColor:"grey", color:'white'}} p={'12px'}>
        <Box >{icon}</Box>
        <Text>{text}</Text>
      </Flex>
    );
  };
  return (
    <Box color={"#C7C7C7"} bgColor={"#212121"} minH={"100%"} py={'20px'} borderRight={'2px solid grey'}>
      <Heading color={"white"} fontSize={"26px"} mb={'40px'} p={'14px'} fontFamily={'"Nunito", sans-serif'}>
        Task Master 💀
      </Heading>
      <SimpleGrid alignContent={"start"} gap={"20px"}>
        <Slides icon={<AiFillHome />} text={"All Tasks"} />
        <Slides icon={<PiListStar />} text={"Important!"} />
        <Slides icon={<MdDone />} text={"Completed"} />
        <Slides icon={<GiSandsOfTime />} text={"Incomplete"} />
      </SimpleGrid>
    </Box>
  );
};

export default Filters;
