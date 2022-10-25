import React, { useState, useEffect } from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";
import { MAX_STUDENT_CODE_LENGHT } from "./utils";

function CheckInStudents() {
  const [name, setName] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  const handleNumericalInputChange = (e) => {
    const value = e.target.value ?? "";
    if (/^\d*$/.test(value) && value?.length <= MAX_STUDENT_CODE_LENGHT)
      setStudentCode(value);
  };

  const handleStringlInputChange = (e) => {
    const value = e.target.value;
    if (/^([a-zA-Z]|\s{0,1})*$/.test(value)) setName(value);
  };
  // Chakra color mode
  const bgForm = useColorModeValue("white", "navy.800");
  return (
    <Flex position="relative" mb="40px">
      <Flex
        minH={{ md: "1000px" }}
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ md: "0px" }}
      >
        <Flex
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="center"
          mb="60px"
          mt={{ base: "50px", md: "20px" }}
        >
          <Flex
            zIndex="2"
            direction="column"
            w="445px"
            background="transparent"
            borderRadius="15px"
            p="40px"
            mx={{ base: "100px" }}
            m={{ base: "20px", md: "auto" }}
            bg={bgForm}
            boxShadow={useColorModeValue(
              "0px 5px 14px rgba(0, 0, 0, 0.05)",
              "unset"
            )}
          >
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Name
              </FormLabel>
              <Input
                variant="auth"
                fontSize="sm"
                ms="4px"
                type="text"
                placeholder="Your full name"
                mb="24px"
                size="lg"
                value={name}
                onChange={handleStringlInputChange}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Student Code
              </FormLabel>
              <Input
                variant="auth"
                fontSize="sm"
                ms="4px"
                type="text"
                placeholder="Your student code"
                mb="24px"
                size="lg"
                value={studentCode}
                onChange={handleNumericalInputChange}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Check in date
              </FormLabel>
              <Input
                type="datetime-local"
                name="check-in-date"
                id="check-in-date"
                className="chakra-input"
                mb="24px"
                value={checkInDate}
                onChange={setCheckInDate}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Check out date
              </FormLabel>
              <Input
                type="datetime-local"
                name="check-in-date"
                id="check-in-date"
                className="chakra-input"
                mb="24px"
                value={checkOutDate}
                onChange={setCheckOutDate}
              />
              <Button
                fontSize="10px"
                variant="dark"
                fontWeight="bold"
                w="100%"
                h="45"
                mb="24px"
                onClick={(value) => {
                  // TODO
                  console.log(value);
                }}
              >
                CHECK IN
              </Button>
            </FormControl>
          </Flex>
        </Flex>
        <Box
          overflowX="hidden"
          h="100%"
          w="100%"
          left="0px"
          position="absolute"
          bgImage={signInImage}
        >
          <Box
            w="100%"
            h="100%"
            bgSize="cover"
            bg="blue.500"
            opacity="0.8"
          ></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default CheckInStudents;