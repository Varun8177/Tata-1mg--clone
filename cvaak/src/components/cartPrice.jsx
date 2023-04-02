import { Box } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillMinusCircle } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
const CartPrice = ({ ele, handleDelete, handleTotal }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddProduct = () => {
    if (quantity < 10) setQuantity((quantity) => quantity + 1);
  };
  const handleRemoveProduct = () => {
    if (quantity > 1) setQuantity((quantity) => quantity - 1);
  };

  return (
    <>
      <Box
        style={{
          border: "1px solid grey",
          marginTop: "20px",
          backgroundColor: "#FAF9F6",
          boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px;",
          width: "40vw",
          height: "20vh",
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "40%",
        }}
      >
        <Box style={{ marginLeft: "10px" }}>
          <h3
            style={{
              fontSize: "14px",
              marginTop: "10px",
              width: "20vw",
            }}
          >
            {ele.title}
          </h3>
          <p
            style={{
              fontSize: "12px",
              color: "grey",
              fontWeight: "500",
            }}
          >
            {ele.packsize}
          </p>

          <button
            onClick={() => {
              handleDelete(ele._id);
            }}
          >
            <div
              style={{
                display: "flex",
                color: "gray",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <RiDeleteBin6Line />
              Remove
            </div>
          </button>
        </Box>

        <Box>
          <p
            style={{
              marginRight: "20px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            ₹ {ele.price * quantity}
            {/* <CartPrice price={ele.price} quantity={quantity}/> */}
          </p>
          <p
            style={{
              fontSize: "10px",
              color: "red",
              border: "2px dotted red",
              marginRight: "20px",
            }}
          >
            Coupon Not Applicable
          </p>
          <Box style={{ display: "flex" }}>
            <button
              onClick={() => {
                handleRemoveProduct(ele.id);
                handleTotal(-ele.price);
              }}
              disabled={quantity == 1}
            >
              <AiFillMinusCircle />
            </button>
            <p
              style={{
                marginTop: "10px",
                marginLeft: "8px",
                marginRight: "8px",
              }}
            >
              {quantity}
            </p>
            <button
              onClick={() => {
                handleAddProduct(ele.id);
                handleTotal(ele.price);
              }}
            >
              <BsPlusCircleFill />
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CartPrice;
