import { Box, Button, Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import Carousel from "react-bootstrap/Carousel";
import { RiDeleteBin6Line } from "react-icons/ri";
import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
//  import { auth } from "config/firebase";
// // import { userStatusUpdate } from "@/redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/router";
// import { DELETE_PRODUCT_REQUEST } from "@/redux/products/products.actionTypes";
// // import EmptyCart from "@/components/EmptyCart";
import { DeleteCartItem } from "@/redux/admin/admin.types";
// // import AddReduceCartButton from "@/components/AddReduceCartButton";
import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";
import Head from "next/head";
import Footer from "@/components/footer";
import axios from "axios";
import CartPrice from "./cartPrice";
import { useRouter } from "next/router";
import EmptyCart from "@/components/EmptyCart";

// let token=JSON.parse(localStorage.getItem("token"))

// const handleDeletePost=async(id)=>{
//  try{
//   await axios.delete(`https://black-skirt.cyclic.app/cart/delete/${id}`,{
//     headers:{
//    "auth":token
//     }
//   })
//  setCart(cart.filter((c)=>c.id!==id));
// }
// catch(err){
//   console.log(err)
// }
// }

const Cart = () => {
  const [cart, setCart] = useState([]);
 
  const router = useRouter();

  const handleDelete = (id) => {
    fetch(
      `https://black-skirt.cyclic.app/cart/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          auth: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI3MDRjNjlkMDM0YTg4ZTlkZjkyY2MiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODAzNDE0OTN9.tZa5svZf2PC6Z-tFK6mvQ6e5d6XsTRWAeiDvBQ0wP8Y`,
        },
      }
    ).then(() => {
      setCart(cart.filter((c) => c._id !== id));
    }).catch((error) => {
      console.error("Error deleting item from cart:", error);
    });
  };

  const handleAddProduct = (cart_id) => {
    if (quantity < 10) setQuantity((quantity) => quantity + 1);
  };
  const handleRemoveProduct = () => {
    if (quantity > 1) setQuantity((quantity) => quantity - 1);
  };

  const [total,setTotal]=useState(0)
  
  // const itemPrice = cart?.reduce((price, ele) => price + ele.price + ele.qty, 0);
  // const taxPrice = itemPrice * 0.14;
  // const shippingPrice = itemPrice > 2000 ? 0 : 50;
  // const totalPrice = Math.ceil(itemPrice + taxPrice)-115;
  // const totalPrice = 0;
  // const totalCart=0

  const handleTotal=(value)=>{
    setTotal(total+value)
  }

  useEffect(()=>{
    
  },[])

  const Dummydata = [
    // {
    //   maxQty: 7,
    //   src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/0fa72f2c-072d-4c6a-bc52-446edab403a4/tata-1mg-salmon-omega-3-fish-oil-capsule.jpeg",
    //   title: "Tata 1mg Salmon Omega 3 Fish Oil Capsule",
    //   packsize: "bottle of 60 capsules",
    //   rating: "4.4",
    //   CardRatingDetail: "1506 ratings",
    //   "strike-price": "995",
    //   "discount-percent": "47% off",
    //   price: 524,
    //   id: 1,
    // },
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/images/w_150,f_auto,h_150,c_fit,q_auto/5297c0f348fa4ae9a9ccd033646e32a2/tata-1mg-adult-diaper-tape-style-large.jpg",
      title: "Adult Diaper Tape Size",
      packsize: "bottle of 60 diapers",
      rating: "4.3",
      CardRatingDetail: "201 ratings",
      "strike-price": "595",
      "discount-percent": "53% off",
      price: 277,
      id: 2,
    },
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/images/w_150,f_auto,h_150,c_fit,q_auto/5e44bce247ed468fb4d3e1c1cd70d8bb/protinex-health-and-nutritional-drink-rich-chocolate.jpg",
      title: "Proteinx Health",
      packsize: "box of 1 Unit",
      rating: "4.2",
      CardRatingDetail: "94 ratings",
      "strike-price": "800",
      "discount-percent": "43% off",
      price: 451,
      id: 3,
    },
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/images/w_150,f_auto,h_150,c_fit,q_auto/cropped/p2sgsoxnec3ibe2yzwjf/swadeshi-special-chyawanprash.jpg",
      title: "Swadeshi Special Chyawanprash",
      packsize: "bottle of 60 capsules",
      rating: "4.2",
      CardRatingDetail: "1243 ratings",
      "strike-price": "995",
      "discount-percent": "57% off",
      price: 422,
      id: 4,
    },
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/6b818c82-0926-4f67-9eff-830d594f5a86.jpeg",
      title: "i-Know Ovulation Strip Kit",
      packsize: "packet of 5 Test Kits",
      rating: "3.7",
      CardRatingDetail: "339 ratings",
      "strike-price": "549",
      "discount-percent": "14% off",
      price: 472,
      id: 5,
    },
  ];

  useEffect(() => {
    fetch(`https://black-skirt.cyclic.app/cart`, {
      headers: {
        auth: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI3MDRjNjlkMDM0YTg4ZTlkZjkyY2MiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODAzNDE0OTN9.tZa5svZf2PC6Z-tFK6mvQ6e5d6XsTRWAeiDvBQ0wP8Y`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCart(res);
        const itemPrice = res?.reduce((price, ele) => price + ele.price + ele.qty, 0);
    console.log(itemPrice)
   setTotal(itemPrice)
      })

      .catch((err) => console.log(err));
  }, []);

  // if (cart?.length < 0) {
  //   return (

  //   );
  // }
  return (
    <div>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartNavbar />
      {cart.length !== 0 ? (
        <>
          <h6 style={{ marginLeft: "16%", marginTop: "3%" }}>
            Items NOT Requiring Prescription{" "}
          </h6>
          <Box
            style={{
              height: "auto",
              border: "0px solid red",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box style={{ border: "0px solid yellow" }}>
              {cart?.map((ele) => (
                <CartPrice ele={ele} handleDelete={handleDelete} handleTotal={handleTotal}/>
              ))}
            </Box>
            <Box
              style={{
                border: "0px solid green",
                height: "60vh",
                width: "30vw",
                margin: "4%",
              }}
            >
              <Box>
                <Box
                  style={{
                    backgroundColor: "#FAF9F6",
                    border: "1px solid grey",
                    height: "20vh",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                  }}
                >
                  <h5
                    style={{
                      backgroundColor: "#A52A2A",
                      width: "20%",
                      color: "white",
                      marginTop: "10px",
                      marginLeft: "10px",
                      padding: "2px",
                    }}
                  >
                    Care Plan
                  </h5>
                  <h1
                    style={{
                      color: "#228C22",
                      fontSize: "15px",
                      marginLeft: "10px",
                    }}
                  >
                    You can save extra ₹ 195 on thus order
                  </h1>
                  <p style={{ marginLeft: "10px" }}>Become a member</p>
                  <button
                    style={{
                      width: "30%",
                      border: "2px solid red",
                      borderRadius: "10px",
                      margin: "0px 20px 0px 50px",
                      color: "red",
                    }}
                  >
                    Know More
                  </button>
                  <button
                    style={{
                      width: "30%",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "10px",
                      margin: "0px 20px 0px 50px",
                      padding: "4px",
                    }}
                  >
                    Add
                  </button>
                </Box>
                <Box
                  style={{
                    border: "1px solid black",
                    marginTop: "40px",
                    height: "30vh",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                  }}
                >
                  <Box style={{ marginLeft: "10px", marginTop: "10px" }}>
                    Item Total(MRP):
                  </Box>
                  <Box
                    style={{
                      marginTop: "20px",
                      marginLeft: "10px",
                      display: "flex",
                    }}
                  >
                    Shipping Fee:
                    <Box
                      style={{
                        marginLeft: "40%",
                        color: "gray",
                        fontSize: "15px",
                      }}
                    >
                      As per delivery address
                    </Box>
                  </Box>
                  <hr style={{ width: "26vw", marginLeft: "20px" }}></hr>
                  <Box style={{ marginTop: "20px", marginLeft: "10px" }}>
                    To be paid:
                  </Box>
                  <hr style={{ width: "26vw", marginLeft: "20px" }}></hr>
                  <Box
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      marginLeft: "10px",
                      backgroundColor: "#e4f6e7",
                      height: "6vh",
                      padding: "10px",
                      width: "28vw",
                      display: "flex",
                    }}
                  >
                    Total Saving:
                    <Box style={{ marginLeft: "60%" }}>₹{total}</Box>
                  </Box>
                  <Button
                    onClick={() => router.push("/payment")}
                    style={{
                      marginLeft: "1%",
                      marginTop:"10px",
                      width:"95%",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    Proceed
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Stack p={10} mt={20}>
            <Text as={"b"} ml={"20px"}>
              Similar Products
            </Text>
            <Flex flexWrap={"wrap"}>
              <Carousel style={{ width: "20%" }}>
                <Carousel.Item>
                  <img
                    src="https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gc3u9gfc331wtsipnljl/tata-1mg-calcium-vitamin-d3-zinc-magnesium-and-alfalfa-tablet-joint-support-bones-health-immunity-energy-support.jpg"
                    className="d-block w-100"
                    alt="Medicine"
                  />
                  <Carousel.Caption style={{ color: "black" }}>
                    <h3>Tata 1mg Calcium </h3>
                    <p>Rating:4.3</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gmkrpf1imjj9djwvq4gq/tata-1mg-multivitamin-supreme-zinc-calcium-and-vitamin-d-capsule-for-immunity-energy-overall-health.jpg"
                    alt="Second slide"
                  />

                  <Carousel.Caption style={{ color: "black" }}>
                    <h3>Multivitamin Supreme</h3>
                    <p>Rating:4.2</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/59d4bf61-6252-419d-80f7-340459744690/i-know-ovulation-strip-kit.jpeg"
                    alt="Third slide"
                  />

                  <Carousel.Caption style={{ color: "black" }}>
                    <h3>i-Know Ovulation Strip Kit</h3>
                    <p>Rating:3.7</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              {Dummydata?.map((item, i) => {
                // return <Link key={i + 1} href={`products/${item.id}`}>
                return <ProductCard key={i + 1} {...item} />;
                // </Link>
              })}
            </Flex>
          </Stack>
        </>
      ) : (
        <EmptyCart />
      )}
      <Footer />{" "}
    </div>
  );
};
export default Cart;
