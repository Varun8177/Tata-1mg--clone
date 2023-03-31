import Boxes from "@/components/admin/Boxes";
import Sidebar from "@/components/admin/Sideview";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  useColorModeValue,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProd,
  DeleteProd,
  FilterProd,
  GetRequest,
  UpdateProd,
} from "@/redux/admin/admin.action";
import AdminProductsPagination from "@/components/admin/AdminProductsPagination";

const AdminProducts = () => {
  const data = useSelector((store) => store.AdminReducer.products);

  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);

  const HandleActivePage = (val) => {
    setActivePage(val);
  };
  useEffect(() => {
    dispatch(GetRequest());
  }, []);

  return (
    <Box bgColor={"#d8dff7"} h={"90vh"}>
      <Flex bgColor={"#d8dff7"} w={"99%"} m={"auto"}>
        <Box
          bgColor={"white"}
          h={"80vh"}
          borderRadius={"10px"}
          mt="30px"
          mr={"30px"}
        >
          <Sidebar />
        </Box>
        <Box
          bgColor={"white"}
          pt={"20px"}
          w={"100%"}
          h={"80vh"}
          m={"auto"}
          mt="30px"
        >
          <Flex justifyContent={"space-around"} borderBottomWidth={1} pb={"5"}>
            <Input placeholder="Search by name " variant={"filled"} w={"50%"} />
            <Menu>
              <MenuButton
                _hover={{ bgColor: "500" }}
                bgColor={"500"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Filter
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    dispatch(FilterProd("Skin Care"));
                  }}
                >
                  Skin Care
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(FilterProd("Nutritional Deficiencies"));
                  }}
                >
                  Nutritional Deficiencies
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(FilterProd("Mind Care"));
                  }}
                >
                  Mind Care
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(FilterProd("Joint & Muscle Care"));
                  }}
                >
                  Joint & Muscle Care
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                _hover={{ bgColor: "500" }}
                bgColor={"500"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Sort
              </MenuButton>
              <MenuList>
                <MenuItem>Price: Low to High</MenuItem>
                <MenuItem>Price: High to Low</MenuItem>
                <MenuItem>Stocks {"<"} 3</MenuItem>
                <MenuItem>Stocks {">"} 3</MenuItem>
              </MenuList>
            </Menu>
            {/* <Button bgColor={"500"}>Add Product</Button> */}
            <AddProduct />
            <Button bgColor={"500"} onClick={() => dispatch(GetRequest())}>
              Reset
            </Button>
          </Flex>

          <Grid templateColumns={"repeat(3,1fr)"} p={"5"} gap={"5"}>
            {data.length > 0 &&
              data
                .filter((item, i) => {
                  return i >= 9 * (activePage - 1) && i < 9 * activePage;
                })
                .map((item) => {
                  return (
                    <Flex key={item.id}>
                      <Image
                        src={item.src}
                        alt={item.id}
                        w={"100px"}
                        h={"100px"}
                        objectFit={"contain"}
                      />
                      <Stack>
                        <Text>{item.title.substr(0, 29)}...</Text>
                        <Text>Price: {item.price}</Text>
                        {/* <Text>{item.title.substr(0, 29)}...</Text> */}
                        <Flex>
                          <EditButton item={item} />
                        </Flex>
                      </Stack>
                    </Flex>
                  );
                })}
          </Grid>
          <AdminProductsPagination
            onPageChange={HandleActivePage}
            pageSize={9}
            activePage={activePage}
            items={data.length}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminProducts;

function EditButton({ item }) {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(item.src);
  const Remove = () => setSelectedImage(item.src);
  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);

  const upload = (event) => {
    console.log(event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex>
        <Text
          _hover={{ cursor: "pointer" }}
          textDecoration={"underline"}
          w={"60px"}
          h={"30px"}
          onClick={onOpen}
        >
          Edit
        </Text>
        <Popover>
          <PopoverTrigger>
            <Text
              _hover={{ cursor: "pointer" }}
              textDecoration={"underline"}
              w={"60px"}
              h={"30px"}
            >
              Delete
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              Are you sure you want to delete this product?
            </PopoverBody>
            <PopoverFooter>
              <Flex w={"100%"} justifyContent={"space-evenly"}>
                <Button>No</Button>
                <Button
                  onClick={() => {
                    dispatch(DeleteProd(item.id));
                  }}
                >
                  Yes
                </Button>
              </Flex>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{item.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {" "}
            <Stack spacing={4} mb={5}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type={item.name}
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </FormControl>
              <Flex
                textAlign={"center"}
                alignItems={"center"}
                w={"100%"}
                justifyContent={"space-around"}
              >
                <Image
                  objectFit={"contain"}
                  borderRadius={"10px"}
                  alt="not found"
                  width={"100px"}
                  h={"100px"}
                  src={selectedImage}
                />
                <Stack>
                  <input type="file" name="myImage" onChange={upload} />
                  {selectedImage ? (
                    <Button onClick={Remove}>Remove</Button>
                  ) : null}
                </Stack>
              </Flex>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                const changes = { title: title, price, src: selectedImage };
                dispatch(UpdateProd(item.id, changes));
              }}
            >
              Update Product
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}


function AddProduct() {
  const Remove = () => setSelectedImage(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  // const [strike-price, setstrike-price] = 
  // const [discount-percent, setdiscount-percent] = useState("");
  const [maxQty, setmaxQty] = useState(0);
  const [rating, setrating] = useState(0);
  const [CardRatingDetail, setCardRatingDetail] = useState("");
  const [category, setcategory] = useState("");

  const toast = useToast();
  const [toastDelay, setToastDelay] = useState(false);
  const dispatch = useDispatch();
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
  );

  const upload = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        bgColor={"500"}
      >
        Add Product
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent preserveScrollBarGap>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody preserveScrollBarGap={true}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="enter title here"
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="enter price here"
                type={"number"}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="enter title here"
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>maxQty</FormLabel>
              <Input
                placeholder="enter price here"
                type={"number"}
                onChange={(e) => setmaxQty(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Rating</FormLabel>
              <Input
                placeholder="enter price here"
                type={"number"}
                onChange={(e) => setrating(e.target.value)}
              />

            </FormControl>

            <FormControl isRequired>
              <FormLabel>CardRatingDetail</FormLabel>
              <Textarea
                placeholder="enter CardRatingDetail here"
                onChange={(e) => CardRatingDetail(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Category</FormLabel>
              <Textarea
                placeholder="enter category here"
                onChange={(e) => setcategory(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Select Product Image</FormLabel>
              <Flex
                textAlign={"center"}
                alignItems={"center"}
                w={"100%"}
                justifyContent={"space-around"}
              >
                {selectedImage ? (
                  <Image
                    objectFit={"contain"}
                    borderRadius={"10px"}
                    alt="not found"
                    width={"100px"}
                    h={"100px"}
                    src={selectedImage}
                  />
                ) : null}
                <Stack>
                  <input type="file" name="myImage" onChange={upload} />
                  {selectedImage ? (
                    <Button onClick={Remove}>Remove</Button>
                  ) : null}
                </Stack>
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={"10"}>
              Close
            </Button>
            <Button
              isDisabled={toastDelay}
              onClick={() => {
                if (
                  title.length &&
                  description.length &&
                  price &&
                  selectedImage !== null
                ) {
                  dispatch(
                    AddProd({
                      title: title,
                      src: selectedImage,
                      price : price,
                      // strike-price: strike-price ,
                      // discount-percent: discount-percent,
                      maxQty: maxQty,
                     rating: rating,
                      CardRatingDetail: CardRatingDetail ,
                      description: description,
                      category: category
                    })
                  );
                  toast({
                    title: `Successfully created product`,
                    status: "success",
                    isClosable: true,
                  });
                } else {
                  toast({
                    title: `please fill details`,
                    status: "error",
                    isClosable: true,
                    duration: 3000,
                  });
                  setToastDelay(true);
                  setTimeout(() => {
                    setToastDelay(false);
                  }, 4000);
                }
              }}
            >
              Add Product
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
