// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Progress,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
// Variables
import {
  barChartData,
  barChartOptions,
  lineChartData,
  lineChartOptions,
} from "variables/charts";
import { pageVisits, socialTraffic } from "variables/general";

export default function Dashboard() {
  // Chakra Color Mode
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");

  const { colorMode } = useColorMode();

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        gap='20px'>
        
        <Card p='0px' maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction='column'>
            <Flex align='center' justify='space-between' p='22px'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                View Students
              </Text>
              <Button variant='primary' maxH='30px'>
                Create
              </Button>
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "hidden" }}>
              <Table>
                <Thead>
                  <Tr bg={tableRowColor}>Name</Tr>
                  <Tr bg={tableRowColor}>Student Code</Tr>
                  <Tr bg={tableRowColor}>Carerr</Tr>
                  <Tr bg={tableRowColor}>Check In</Tr>
                  <Tr bg={tableRowColor}>Check On</Tr>
                  <Tr bg={tableRowColor}>Actions</Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td>
                      <Button className="btn btn-info">Update</Button>
                      <Button className="btn btn-Warning">Show</Button>
                      <Button className="btn btn-danger">Delete</Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>
      </Grid>
    </Flex>
  );
}
