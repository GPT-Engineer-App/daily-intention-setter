import { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, Heading, Flex, IconButton, useToast } from "@chakra-ui/react";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";

const Index = () => {
  const [intention, setIntention] = useState("");
  const [currentIntention, setCurrentIntention] = useState("");
  const [completed, setCompleted] = useState(false);
  const toast = useToast();

  const handleSetIntention = () => {
    if (intention.trim() === "") {
      toast({
        title: "Intention cannot be empty.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setCurrentIntention(intention);
    setIntention("");
    setCompleted(false);
    toast({
      title: "Intention set!",
      description: "Your daily intention has been set.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleCompleteIntention = () => {
    setCompleted(true);
    toast({
      title: "Congratulations!",
      description: "You have completed your daily intention.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.50" p={4}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl" color="teal.500">Daily Intention Setter</Heading>
        <Box width="100%" bg="white" p={6} borderRadius="md" boxShadow="md">
          <VStack spacing={4}>
            <Input
              placeholder="Set your daily intention..."
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
              size="lg"
            />
            <Button
              leftIcon={<FaPlusCircle />}
              colorScheme="teal"
              size="lg"
              onClick={handleSetIntention}
              width="100%"
            >
              Set Intention
            </Button>
          </VStack>
        </Box>
        {currentIntention && (
          <Box width="100%" bg="white" p={6} borderRadius="md" boxShadow="md">
            <VStack spacing={4}>
              <Text fontSize="2xl" color={completed ? "gray.500" : "teal.700"} textDecoration={completed ? "line-through" : "none"}>
                {currentIntention}
              </Text>
              {!completed && (
                <Button
                  leftIcon={<FaCheckCircle />}
                  colorScheme="teal"
                  size="lg"
                  onClick={handleCompleteIntention}
                  width="100%"
                >
                  Mark as Completed
                </Button>
              )}
            </VStack>
          </Box>
        )}
        <Box width="100%" bg="white" p={6} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" color="gray.600" textAlign="center">
            "The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;