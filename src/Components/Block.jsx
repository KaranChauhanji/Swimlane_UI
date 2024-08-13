import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { REMOVE_TODO, TOGGLE_TODO } from "../Redux/Todos/actionTypes";
const Block = ({ data, isStarted = false }) => {
  const dispatch = useDispatch();

  const deleteTodo = (title) => {
    dispatch({ type: REMOVE_TODO, payload: title });
  };
  const toggleStatus = (title) => {
    dispatch({ type: TOGGLE_TODO, payload: { title, isStarted } });
  };
  return (
    <Box bgColor={"#323232"} color={"whitesmoke"} p={"20px"} my={"12px"}>
      <Text fontSize={"17px"}>{data.title}</Text>
      <Text fontSize={"14px"} color={"lightgrey"}>
        {data.description}
      </Text>
      <Flex alignItems={"center"} justifyContent={"space-between"} pt={"20px"}>
        <Button onClick={() => toggleStatus(data.title)}>
          {data.status ? "Completed" : data.todo ? "To-do" : "In Progress"}
        </Button>{" "}
        <Box
          fontSize={"2xl"}
          onClick={() => deleteTodo(data.title)}
          cursor={"pointer"}
        >
          <MdDelete />
        </Box>
      </Flex>
    </Box>
  );
};

export default Block;
