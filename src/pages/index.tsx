import {Button, Container, HStack, Spacer, Text, VStack} from "@chakra-ui/react"
import { useState } from "react";
import NewPostModal from "@/components/NewPostModal";
import Post from "@/components/Post";

export default function Home() {
  const [resetAll, setResetAll] = useState(false);
  const [completed, setCompleted] = useState(false);

  return (
    <div>
      <NewPostModal
        isOpen={completed}
        onClose={() => setCompleted(false)}
      />
      <Container maxW="container.sm">
        <HStack my={10}>

          <Text fontSize="5xl" fontWeight={800}>
            Get all the questions and be awesome!
          </Text>
          <Spacer />
          <Button onClick={() => setResetAll(false)}>Reset</Button>
        </HStack>
        <VStack width="100%">
          <Post
            title="Task 1"
            body="Solve your first riddle."
            question="What is the tallest building on Earth?"
            ans1="Scili"
            ans2="Burj Khalifa"
            ans3="85 Waterman"
            correct="2"
            reset={resetAll}
          />
          <Post
            title="Task 2"
            body="Solve your second riddle."
            question="What is the largest ocean on Earth?"
            ans1="Pacific"
            ans2="Indian"
            ans3="Arctic"
            correct="1"
            reset={resetAll}
          />
          <Post
            title="Task 3"
            body="Solve your final riddle."
            question="When was this assignment due?"
            ans1="Sept. 19th"
            ans2="Sept. 20th"
            ans3="Sept. 21st"
            correct="3"
            reset={resetAll}
          />
        </VStack>
      </Container>
    </div>
  );
}
