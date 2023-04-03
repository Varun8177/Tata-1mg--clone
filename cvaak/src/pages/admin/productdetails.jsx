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
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
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
import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";

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
    <Box bgColor={"#d8dff7"} h={"100vh"}>
      <CartNavbar />
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
            h={"100vh"}
            m={"auto"}
            mt="30px"
          >
            <Flex
              justifyContent={"space-around"}
              borderBottomWidth={1}
              pb={"5"}
            >
              <Input
                placeholder="Search by name "
                variant={"filled"}
                w={"50%"}
                onChange={(e) => setquery(e.target.value)}
              />
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
                      dispatch(FilterProd("calcium"));
                    }}
                  >
                    Calcium
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      dispatch(FilterProd("supplement"));
                    }}
                  >
                    Supplement
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      dispatch(FilterProd("fitness"));
                    }}
                  >
                    Fitness
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      dispatch(FilterProd("hygiene"));
                    }}
                  >
                    Hygiene
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

            <Grid
              templateColumns={"repeat(3,1fr)"}
              p={"5"}
              gap={"5"}
              h={"600px"}
            >
              {data
                ?.filter((item, i) => {
                  return i >= 9 * (activePage - 1) && i < 9 * activePage;
                })
                ?.map((item) => {
                  return (
                    <Flex
                      key={item?._id}
                      alignItems="center"
                      bg="white"
                      p={2}
                      boxShadow="sm"
                      _hover={{ boxShadow: "md" }}
                    >
                      <Image
                        src={item?.src}
                        alt={item?._id}
                        w="80px"
                        h="80px"
                        objectFit="contain"
                        borderRadius="md"
                      />
                      <Box ml={2}>
                        <Heading fontSize="md" mb={1} isTruncated>
                          {item?.title.substr(0, 29)}
                        </Heading>
                        <Text fontWeight="bold" fontSize="sm" color="teal.500">
                          ₹{item?.price}
                        </Text>
                        <EditButton item={item} />
                      </Box>
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
  const toast = useToast();
  const upload = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "vmtbjhvd");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dgze3lj0n/image/upload",
          formData
        );

        console.log(response.data.secure_url);
        setSelectedImage(response.data.secure_url);
      } catch (error) {
        console.error(error, "Error uploading image. Please try again.");
      }
    }
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
                    dispatch(DeleteProd(item._id));
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
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => dispatch(GetRequest())}
            >
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                const changes = { title: title, price, src: selectedImage };
                dispatch(UpdateProd(item._id, changes)).then(() => {
                  onClose();
                });
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

  const [strikeprice, setstrikePrice] = useState("238");
  const [discountPercent, setDiscountPercent] = useState("12%");
  const [maxQty, setmaxQty] = useState(0);
  const [rating, setrating] = useState(0);
  const [CardRatingDetail, setCardRatingDetail] = useState("");
  const [category, setcategory] = useState("");

  const toast = useToast();
  const [toastDelay, setToastDelay] = useState(false);

  let payload = {
    title,
    price,
    description,
    src: selectedImage,
    maxQty,
    rating,
    CardRatingDetail,
    category,
    "strike-price": strikeprice,
    "discount-percent": discountPercent,
  };

  const dispatch = useDispatch();
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
  );

  const upload = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "vmtbjhvd");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dgze3lj0n/image/upload",
          formData
        );

        console.log(response.data.secure_url);
        setSelectedImage(response.data.secure_url);
      } catch (error) {
        console.error(error, "Error uploading image. Please try again.");
      }
    }
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
        <ModalContent w={"700px"} bg={"white"}>
          <ModalHeader w={"700px"} bg={"white"}>
            <Flex w={"100%"} justifyContent={"space-between"}>
              <Text>Add New Product</Text>
              <Text
                cursor={"pointer"}
                onClick={() => {
                  setTitle("Dummy Product");
                  setPrice(10.99);
                  setDescription("This is a dummy product description.");
                  setstrikePrice("238");
                  setDiscountPercent("12%");
                  setmaxQty(3);
                  setrating(2);
                  setCardRatingDetail("dummy card rating detail");
                  setcategory("Dummy Category");
                }}
              >
                AutoFill
              </Text>
            </Flex>
          </ModalHeader>
          <ModalBody w={"700px"} bg={"white"}>
            <FormControl>
              <Flex w="100%" justifyContent="space-between">
                <VStack w="45%">
                  <FormLabel alignSelf={"flex-start"}>Title</FormLabel>
                  <Input
                    placeholder="enter title here"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </VStack>
                <VStack w="45%">
                  <FormLabel alignSelf={"flex-start"}>Price</FormLabel>
                  <Input
                    placeholder="enter price here"
                    type={"number"}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </VStack>
              </Flex>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="enter title here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <Flex w="100%" justifyContent="space-between">
                <VStack w="45%">
                  <FormLabel alignSelf={"flex-start"}>maxQty</FormLabel>
                  <Input
                    value={maxQty}
                    placeholder="enter price here"
                    type={"number"}
                    onChange={(e) => setmaxQty(e.target.value)}
                  />
                </VStack>
                <VStack w="45%">
                  <FormLabel alignSelf={"flex-start"}>Rating</FormLabel>
                  <Input
                    value={rating}
                    placeholder="enter price here"
                    type={"number"}
                    onChange={(e) => setrating(e.target.value)}
                  />
                </VStack>
              </Flex>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>CardRatingDetail</FormLabel>
              <Textarea
                value={CardRatingDetail}
                placeholder="enter CardRatingDetail here"
                onChange={(e) => setCardRatingDetail(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Category</FormLabel>
              <Textarea
                value={category}
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
          <ModalFooter w={"700px"} bg={"white"}>
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
                  dispatch(AddProd(payload)).then(() => {
                    toast({
                      title: `Successfully created product`,
                      status: "success",
                      isClosable: true,
                      duration: 3000,
                    });
                    onClose();
                  });
                } else {
                  toast({
                    title: `please fill details`,
                    status: "error",
                    isClosable: true,
                    duration: 2000,
                  });
                  setToastDelay(true);
                  setTimeout(() => {
                    setToastDelay(false);
                  }, 2000);
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
