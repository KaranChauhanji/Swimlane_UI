import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { LuPlusCircle } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Todos/actions";
import TodoState from "./TodoState";
import InProgress from "./InProgress";
import CompletedTodos from "./CompletedTodos";

const Tasks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [task, setTask] = useState({
    title: "",
    description: "",
    important: false,
    status: false,
    todo: true,
  });
  const [filterTodo, setFilterTodo] = useState({
    todoGoing: [],
    inProgress: [],
    completed: [],
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task: ", task);
    dispatch(addTodo(task));
    onClose();
  };
  const { todos } = useSelector((state) => state);

  useEffect(() => {
    const todoInGoing = todos.filter((todo) => todo.todo && !todo.status);
    const todoInProgress = todos.filter((todo) => !todo.status && !todo.todo);
    const todoCompleted = todos.filter((todo) => todo.status);
    setFilterTodo({
      todoGoing: todoInGoing,
      inProgress: todoInProgress,
      completed: todoCompleted,
    });
  }, [todos]);

  return (
    <Box
      color={"#C7C7C7"}
      bgColor={"#212121"}
      minH={["100vh",'100vh','100vh', 'auto']}
      maxH={['auto','auto','auto','100vh']}
      p={["5px", "5px", "10px", "40px"]}
      borderLeft={['none','none','none',"2px solid grey"]}
    >
      <Flex p={"14px"} justifyContent={"space-between"} alignItems={"center"}>
        <Heading color={"white"} fontFamily={'"Nunito", sans-serif'}>
          All Tasks
        </Heading>

        <Box fontSize={"3xl"} cursor={"pointer"} onClick={onOpen}>
          <LuPlusCircle />
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bgColor={"#212121"} color={"white"}>
            <ModalHeader>Add New Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <SimpleGrid spacing={"17px"}>
                  <SimpleGrid spacing={"8px"}>
                    <Text>Title</Text>
                    <Input
                      placeholder="Title"
                      onChange={(e) =>
                        setTask((prev) => ({ ...prev, title: e.target.value }))
                      }
                    />
                  </SimpleGrid>
                  <SimpleGrid spacing={"8px"}>
                    <Text>Description</Text>
                    <Input
                      placeholder="Description"
                      onChange={(e) =>
                        setTask((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                    />
                  </SimpleGrid>
                  <Checkbox
                    onChange={(e) =>
                      setTask((prev) => ({
                        ...prev,
                        important: e.target.checked,
                      }))
                    }
                  >
                    Important
                  </Checkbox>
                  <Checkbox
                    onChange={(e) =>
                      setTask((prev) => ({
                        ...prev,
                        status: e.target.checked,
                      }))
                    }
                  >
                    Completed
                  </Checkbox>
                  <Button type="submit">Add Task</Button>
                </SimpleGrid>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>

      <SimpleGrid
        gridTemplateColumns={["1fr", "1fr", "1fr", "repeat(3,1fr)"]}
        spacing={['5px','5px','10px',"16px"]}
        p={"20px"}
        h={"90%"}
      >
        <TodoState data={filterTodo.todoGoing} />
        <InProgress data={filterTodo.inProgress} />
        <CompletedTodos data={filterTodo.completed} />
      </SimpleGrid>
    </Box>
  );
};

export default Tasks;
