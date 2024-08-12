import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { MdDelete } from "react-icons/md";
const Block = ({data}) => {
  return (
    <Box bgColor={'#323232'} color={"whitesmoke"} p={'20px'} my={'12px'}>
        <Text fontSize={'17px'}>{data.title}</Text>
        <Text fontSize={'14px'} color={"lightgrey"}>{data.description}</Text>
        <Flex alignItems={"center"} justifyContent={"space-between"} pt={'20px'}><Button>{data.status? "Completed":data.todo?"To-do":"In Progress"}</Button> <Box fontSize={'2xl'}><MdDelete /></Box></Flex>
    </Box>
  )
}

export default Block