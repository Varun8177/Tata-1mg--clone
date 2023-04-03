import { Avatar, Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Boxes({
  color,
  value,
  text,
  subtitle,
  icon,
  ctaText,
  ctaLink,
  src,
}) {
  const router = useRouter();
  return (
    <Box
      h={{
        base: "100px",
        sm: "100px",
        md: "100px",
        lg: "100px",
        xl: "120px",
        "2xl": "120px",
      }}
      w={{
        base: "200px",
        sm: "200px",
        md: "200px",
        lg: "220px",
        xl: "240px",
        "2xl": "250px",
      }}
      bgColor={color}
      borderRadius={"10px"}
      p={4}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          {icon && (
            <Avatar bgColor={"white"} color={"black"} name={String(value)} />
          )}
          {src && (
            <img
              style={{ width: "60px", borderRadius: "50%" }}
              src={src}
              alt={text}
            />
          )}
        </Box>
        <Box textAlign="right">
          <Text fontWeight="bold" fontSize={{ base: "2xl", md: "3xl" }}>
            {value}
          </Text>
          <Text>{text}</Text>
          {subtitle && <Text mt={2}>{subtitle}</Text>}
          {ctaText && ctaLink && (
            <Text
              as="a"
              href={ctaLink}
              textDecoration="underline"
              fontSize="sm"
            >
              {ctaText} <FaLongArrowAltRight ml={1} />
            </Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
