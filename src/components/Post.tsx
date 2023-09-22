import { Button, Box, Divider, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Comment from "./Comment";
import NewPostModal from "./NewPostModal";
import index from "@/pages/index"
import { AnyARecord } from "dns";

interface Props {
  title: string;
  body: string;
  question: string;
  ans1: string;
  ans2: string;
  ans3: string;
  correct: string;
  reset: boolean;
}

const Post = ({ title, body, question, ans1, ans2, ans3, correct, reset }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [gotAns, setGotAns] = useState(false);

  const checkAns = (input : string) => {
    setGotAns(input == correct);
  }

  if (reset) {
    setGotAns(false);
  }

  // TODO: Implement a component representing an already existing post
  return (
    <Box width="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p={4}>
        <Text fontSize="xl" fontWeight={600}>
          {title}
        </Text>
        <Text fontSize="sm">{body}</Text>
        <Button onClick={() => setIsClicked(true)}>Show the Riddle</Button>
        <Text>{isClicked ? question : ""}</Text>
      </Box>
      <Divider />
      <Box p={4}>
        <Text fontSize="md" fontWeight={600}>
          Choices
        </Text>
        <VStack>
          <Button onClick={() => checkAns("1")}>{ans1}</Button>
          <Button onClick={() => checkAns("2")}>{ans2}</Button>
          <Button onClick={() => checkAns("3")}>{ans3}</Button>
          {gotAns && <Text>You got the answer!</Text>}
        </VStack>
      </Box>
    </Box>
  );
};

export default Post;
