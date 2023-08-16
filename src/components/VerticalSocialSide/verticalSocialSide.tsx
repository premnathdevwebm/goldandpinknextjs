"use client";
import { Box, Link } from "@chakra-ui/react";
import Image from "next/image";
import icon1 from "./iconfa1.png"
import icon2 from "./iconfa2.png"
import icon3 from "./iconfa3.png"

const VerticalSocialSide = () => {
  const iconStyle = {
    margin: "10px",
    width: "30px",
    height: "30px",
  };

  return (
    <Box 
      position={"fixed"}
      top={"40%"}
      left={"2%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
        <Link href="https://www.instagram.com" isExternal>
          <Image src={icon1} alt="Facebook" style={iconStyle} />
        </Link>
        <Link href="https://www.facebook.com" isExternal>
          <Image src={icon2} alt="Instagram" style={iconStyle} />
        </Link>
        <Link href="https://www.twitter.com" isExternal>
          <Image src={icon3} alt="Twitter" style={iconStyle} />
        </Link>
    </Box>
  );
};

export {VerticalSocialSide};
