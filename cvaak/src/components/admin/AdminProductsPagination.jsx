import { Box, Button, Flex } from "@chakra-ui/react";

const AdminProductsPagination = ({
  onPageChange,
  pageSize,
  items,
  activePage,
}) => {
  const countPages = Math.ceil(items / pageSize);
  if (countPages === 1) return null;
  const pages = Array.from({ length: countPages }, (_, i) => i + 1);

  return (
    <Flex
      justifyContent="space-evenly"
      w={"50%"}
      borderRadius={"8px"}
      p="3"
      m="auto"
    >
      <Button
        isDisabled={activePage == 1}
        onClick={() => onPageChange(activePage - 1)}
      >
        Previous
      </Button>
      {pages.map((page, i) => {
        return (
          <Button
            bgColor={activePage === i + 1 ? "500" : "white"}
            key={i + 1}
            colorScheme="gray"
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        );
      })}
      <Button
        isDisabled={activePage == countPages}
        onClick={() => onPageChange(activePage + 1)}
      >
        Next
      </Button>
    </Flex>
  );
};

export default AdminProductsPagination;
