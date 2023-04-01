import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

import SignUpCard from "./SignUpCard";

export default function SignUpModal({ text }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text
        fontSize={{
          base: "6px",
          sm: "8px",
          md: "10px",
          lg: "13px",
          xl: "13px",
          "2xl": "15px",
        }}
        _hover={{ color: "500", cursor: "pointer" }}
        as={"b"}
        onClick={onOpen}
      >
        {text}
      </Text>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <SignUpCard />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
