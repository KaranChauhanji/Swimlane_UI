import { Box, SimpleGrid } from "@chakra-ui/react";
import Filters from "../Components/Filters";
import Tasks from "../Components/Tasks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Dashboard = () => {
  return (
    <Box>
      <SimpleGrid
        gridTemplateColumns={"1fr 5fr"}
        bgColor={"#181818"}
        minH={"100vh"}
        spacing={"40px"}
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
