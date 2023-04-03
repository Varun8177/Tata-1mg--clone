import { getData } from "@/redux/products/products.action";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Heading,
  Hide,
  Radio,
  RadioGroup,
  Show,
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const FilterAndSort = ({
  handleSortPrice,
  handleSortRating,
  handleSortReset,
}) => {
  const router = useRouter();
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [filterValues, setFilterValues] = useState([]);
  const [sort, setSort] = useState("");
  const [Rating, setRating] = useState("");
  const handleFilterChange = (value) => {
    setFilterValues(value);
  };

  const handleReset = () => {
    dispatch(getData("", "", []));
  };

  useEffect(() => {
    let params = {};
    if (filterValues.length) params.category = filterValues;
    if (sort) {
      params.sortBy = "price";
      params.order = sort;
    }
    router.push({
      query: params,
    });
    dispatch(getData("", "", filterValues));
  }, [filterValues]);

  useEffect(() => {
    let params = {};
    if (sort) {
      params.sortBy = "price";
      params.order = sort;
    }
    if (filterValues.length) params.category = filterValues;
    router.push({
      query: params,
    });
    dispatch(getData(params.sortBy, sort, filterValues));
  }, [sort]);

  useEffect(() => {
    let params = {};
    if (sort) {
      params.sortBy = "rating";
      params.order = Rating;
    }
    router.push({
      query: params,
    });
    if (filterValues.length) params.category = filterValues;
    dispatch(getData(params.sortBy, Rating, filterValues));
  }, [Rating]);
  return (
    <>
      <Show above="sm">
        <Box
          bg="white"
          w={{ lg: "190px", md: "250px" }}
          h={{ lg: "500px", md: "500px" }}
          ml={{ lg: "7%", md: "5%" }}
          mt="15px"
          p={5}
          fontSize={{ lg: "14px", md: "10px" }}
        >
          <Box m="20px 0">
            <Heading fontSize={"14px"}>FILTER</Heading>
            <CheckboxGroup
              colorScheme="green"
              value={filterValues}
              onChange={handleFilterChange}
            >
              <Stack color={"grey"} spacing={[1, 1]} direction={["column"]}>
                <Checkbox fontSize="10px" value="calcium">
                  Calcium
                </Checkbox>
                <Checkbox value="supplement">Suppliments</Checkbox>
                <Checkbox value="aryurvedic">Ayurvedic</Checkbox>
                <Checkbox value="mask">Masks</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Box>
          <Divider />
          <Box m="20px 0">
            <Heading fontSize={"14px"}>SORT BY PRICE</Heading>
            <RadioGroup
              colorScheme="green"
              onChange={(value) => {
                setSort(value);
              }}
              value={sort}
            >
              <Stack color={"grey"} direction="column" fontSize={"12px"}>
                <Radio value="asc">Low to high</Radio>
                <Radio value="des">High to low</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Divider />
          <Box m="20px 0">
            <Heading fontSize={"14px"}>SORT BY RATING</Heading>
            <RadioGroup
              colorScheme="green"
              onChange={(value) => {
                setRating(value);
              }}
              value={Rating}
            >
              <Stack color={"grey"} direction="column" fontSize={"12px"}>
                <Radio value="asc">Low to high</Radio>
                <Radio value="des">High to low</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Button
            fontWeight={"700"}
            bg="white"
            size={"sm"}
            color="#ff6f61"
            _hover={{
              bg: "#ff6f61",
              color: "white",
            }}
            onClick={() => {
              setFilterValues([]);
              handleReset();
              setSort("");
              setRating("");
            }}
          >
            Reset
          </Button>
        </Box>
      </Show>

      {/* -------------------- */}

      <Hide above="sm">
        <>
          <Button ref={btnRef} colorScheme="gray" onClick={onOpen}>
            Filter and Sort
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="bottom"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Box>
                  <Box>
                    <Heading fontSize={"14px"} mt="20px">
                      FILTER
                    </Heading>
                    <CheckboxGroup
                      colorScheme="green"
                      value={filterValues}
                      onChange={handleFilterChange}
                    >
                      <Stack
                        color={"grey"}
                        fontSize={"12px"}
                        spacing={[1, 1]}
                        direction={["column"]}
                      >
                        <Checkbox fontSize="10px" value="calcium">
                          Calcium
                        </Checkbox>
                        <Checkbox value="Suppliments">Suppliments</Checkbox>
                        <Checkbox value="Proteins">Proteins</Checkbox>
                        <Checkbox value="masks">masks</Checkbox>
                      </Stack>
                    </CheckboxGroup>
                  </Box>
                  <Box m="10px 0">
                    <Heading fontSize={"14px"}>SORT BY PRICE</Heading>
                    <RadioGroup colorScheme="green">
                      <Stack
                        color={"grey"}
                        direction="column"
                        fontSize={"12px"}
                        onChange={(value) => handleSortPrice(value)}
                      >
                        <Radio value="asc">Low to high</Radio>
                        <Radio value="desc">High to low</Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>
                  <Divider />
                  <Box m="10px 0">
                    <Heading fontSize={"14px"}>SORT BY RATING</Heading>
                    <RadioGroup colorScheme="green">
                      <Stack
                        color={"grey"}
                        direction="column"
                        fontSize={"12px"}
                        onChange={(value) => handleSortRating(value)}
                      >
                        <Radio value="asc">Low to high</Radio>
                        <Radio value="desc">High to low</Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>
                  <Button
                    fontWeight={"700"}
                    bg="white"
                    size={"sm"}
                    color="#ff6f61"
                    _hover={{
                      bg: "#ff6f61",
                      color: "white",
                    }}
                    onClick={() => handleSortReset()}
                  >
                    Reset
                  </Button>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </Hide>
    </>
  );
};
export default FilterAndSort;
