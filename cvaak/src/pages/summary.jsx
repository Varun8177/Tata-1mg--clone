import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { getCartData } from "@/redux/cart/cart.action";

function calculateTotalDiscount(products) {
  let total = 0;
  let totalSavings = 0;
  let totalDiscount = 0;
  let totalBeforeDiscount = 0;

  for (let i = 0; i < products.length; i++) {
    const price = products[i].price;
    const discount = parseInt(products[i]["discount-percent"]);

    const savings = price * (discount / 100);
    const discountedPrice = price - savings;
    const discountAmount = price - discountedPrice;

    totalBeforeDiscount += price;
    total += discountedPrice;
    totalSavings += savings;
    totalDiscount += discountAmount;
  }

  return { total, totalSavings, totalDiscount, totalBeforeDiscount };
}
const Summary = () => {
  const adress = useSelector((state) => state.adressReducer);
  const cartData = useSelector((state) => state.CartReducer.products);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalBeforeDiscount, setTotalBeforeDiscount] = useState(0);
  useEffect(() => {
    dispatch(getCartData());
  }, []);

  useEffect(() => {
    const { total, totalSavings, totalDiscount, totalBeforeDiscount } =
      calculateTotalDiscount(cartData);
    setTotal(total);
    setTotalSavings(totalSavings);
    setTotalDiscount(totalDiscount);
    setTotalBeforeDiscount(totalBeforeDiscount);
  }, []);
  return (
    <>
      <CartNavbar />

      <div
        style={{
          display: "flex",
          gap: "40px",
          backgroundColor: "#FAFAFA",
        }}
      >
        <div backgroundColor={"gray"}>
          <Text marginTop={"20px"} marginLeft={"160px"}>
            Order Summary
          </Text>
          <Text
            fontSize={"15px"}
            marginLeft={"160px"}
            marginTop={"40px"}
            fontWeight={"bold"}
          >
            Your items
          </Text>
          <Card
            w={"600px"}
            marginLeft={"150px"}
            backgroundColor={"#fef7ef"}
            h={"40px"}
          >
            <CardBody>
              <Text fontSize={"12px"} fontWeight={"bold"}>
                Activated upon order placement
              </Text>
            </CardBody>
          </Card>
          <Card w={"600px"} marginLeft={"150px"}>
            <CardBody>
              <div
                style={{
                  border: "0px solid red",
                  width: "80px",
                  backgroundColor: "brown",
                  color: "white",
                  borderBottomRightRadius: "50%",
                }}
              >
                Care plan
              </div>
              <Text fontSize={"12px"}>3 months membership</Text>
              <Text fontSize={"11px"} color={"gray.400"}>
                Save an additional 5% on prescription medicine & earn 3%
                NeuCoins on other health products. Get same day, next day with
                Rapid and free standard delivery.
              </Text>
            </CardBody>
          </Card>

          <Card
            w={"600px"}
            marginTop={"20px"}
            marginLeft={"150px"}
            backgroundColor={"#fef7ef"}
            h={"auto"}
            mb={"20px"}
          >
            <CardBody>
              <Text fontSize={"12px"} fontWeight={"bold"}>
                Arriving
              </Text>
            </CardBody>
            {cartData.map((item) => {
              return (
                <CardBody key={item.id} bg={"white"} gap={"10px"}>
                  <div
                    border={"0px solid red"}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <Image
                        width={"40px"}
                        height={"40px"}
                        src={item.src}
                        alt={item.id}
                      />
                    </div>
                    <div>
                      <Text fontSize={"12px"}>{item.title.substr(0, 20)}</Text>
                      <Text fontSize={"11px"} color={"gray.400"}>
                        box of 1 Unit
                      </Text>
                    </div>
                    <div>
                      <Text fontSize={"12px"}>
                        ₹ <span>{item.price}</span>
                      </Text>
                    </div>
                  </div>
                </CardBody>
              );
            })}
          </Card>
        </div>
        <div
          style={{
            width: "300px",
            border: "0px solid red",
            height: "auto",
            marginTop: "50px",
            padding: "10px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text>Select Address</Text>

            <Link href="/payment">
              <Text color={"red"}>CHANGE</Text>
            </Link>
          </div>
          <div
            style={{
              height: "auto",
              width: "95%",
              border: "0px solid red",
              backgroundColor: "white",
              padding: "2px",
            }}
            marginTop={"20px"}
            id="adress-card"
          >
            <Text fontSize={"15px"} fontWeight={"bold"} marginLeft={"10px"}>
              Home
            </Text>
            <Text fontSize={"12px"} marginLeft={"10px"}>
              {adress.name}
            </Text>
            <Text fontSize={"12px"} marginLeft={"10px"}>
              {adress.mobile}
            </Text>
            <Text fontSize={"12px"} marginLeft={"10px"}>
              {adress.actualadress}
            </Text>
          </div>

          <div
            style={{
              height: "auto",
              width: "95%",
              border: "0px solid red",
              marginTop: "50px",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "3px",
              }}
            >
              <Text fontSize={"12px"}>Item Total(MRP)</Text>
              <Text fontSize={"12px"}>₹{totalBeforeDiscount}</Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "3px",
              }}
            >
              <Text fontSize={"12px"}>Price Discount</Text>
              <Text fontSize={"12px"}>-₹{totalDiscount}</Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "3px",
              }}
            >
              <Text fontSize={"12px"}>Care Plan</Text>
              <Text fontSize={"12px"}>₹165</Text>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "3px",
              }}
            >
              <hr />
              <Text fontSize={"12px"}>
                Shipping{" "}
                <span style={{ backgroundColor: "#e4f6e7" }}>
                  FeeFREE for Members
                </span>
              </Text>
              <Text fontSize={"12px"}>0</Text>
              <hr color="red" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Text fontSize={"12px"}>To be paid</Text>
              <Text fontSize={"12px"}>₹{total}</Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
                backgroundColor: "#e4f6e7",
                height: "40px",
                color: "#465a4c",
                fontWeight: "bold",
                padding: "10px",
              }}
            >
              <Text fontSize={"12px"}>Total Savings</Text>
              <Text fontSize={"12px"}>₹{totalSavings}</Text>
            </div>
            <Link href={"/cardpayment"}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "auto",
                  backgroundColor: "#ff6f61",
                  marginTop: "30px",
                  height: "40px",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px",
                }}
              >
                PROCEED TO PAYMENT
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Summary;
