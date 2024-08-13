import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Block from "./Block";

function CompletedTodos({ data }) {
  return (
    <SimpleGrid
      border={"1px solid grey"}
      p={"20px"}
      overflowY={"auto"}
      alignContent={"start"}
      maxH={['auto','auto','auto','80%']}

    >
      <Text  mb={"20px"}>Completed</Text>
      {data.length ? (
        data.map((elem, i) => (
          <Box key={i}>
            <Block data={elem} />
          </Box>
        ))
      ) : (
        <Text color={"white"}>No Todos</Text>
      )}
    </SimpleGrid>
  );
}

export default CompletedTodos;
