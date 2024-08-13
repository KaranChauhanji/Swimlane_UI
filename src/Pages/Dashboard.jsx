import { Box, SimpleGrid } from "@chakra-ui/react";
import Filters from "../Components/Filters";
import Tasks from "../Components/Tasks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Dashboard = () => {
  return (
    <Box bgColor={"#181818"} minH={'100vh'}>
      <SimpleGrid
      display={['block','block','block','grid']}
        gridTemplateColumns={["1fr 5fr"]}
        minH={"100vh"}
        spacing={['1px','1px','1px',"40px"]}
      >
        <Filters />
        <DndProvider backend={HTML5Backend}>
        <Tasks />
        </DndProvider>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
