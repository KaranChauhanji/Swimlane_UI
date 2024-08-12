import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Block from "./Block";

function InProgress({ data }) {
  return (
    <SimpleGrid
      border={"1px solid grey"}
      p={"20px"}
      overflowY={"auto"}
      alignContent={"start"}
    >
      <Text  mb={"20px"}>In Progress</Text>
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

export default InProgress;
