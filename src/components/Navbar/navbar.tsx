"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Grid,
  Box,
  Button,
  Icon,
  Link,
  Text,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCartArrowDown, FaBars } from "react-icons/fa";
import { useCart } from "@/store/cart/cart-context";

export const Navbar = () => {
  const pathname = usePathname();
  const { cartState } = useCart();
  const [cartNumb, setCartNumb] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setCartNumb(cartState.cartItems.length);
  }, [cartState.cartItems]);

  return (
    <Box p={4} backgroundColor={"#F2668F"} position={"sticky"}>
      {/* Hamburger Menu Icon (Mobile View) */}
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Link href="/">
          <Image width={70} height={30} src="/logo.png" alt="Logo" priority />
        </Link>
        <IconButton
          icon={<FaBars />}
          onClick={() => setIsDrawerOpen(true)}
          backgroundColor={"#F2668F"}
          aria-label="Open menu"
        />
      </Box>

      {/* Drawer for Mobile Navigation */}
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <DrawerOverlay>
          <DrawerContent backgroundColor={"#F7ADC0"}>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <Button
                color="primary"
                mb={2}
                onClick={() => router.push("/cart")}
              >
                <Box display="flex" gap={3}>
                  <Icon as={FaCartArrowDown} />
                  <>Cart</>
                  <Badge variant="subtle" colorScheme={"#F7ADC0"}>
                    {cartNumb}
                  </Badge>
                </Box>
              </Button>

              <Link
                href="/"
                display="block"
                mb={2}
                onClick={() => setIsDrawerOpen(false)}
              >
                <Text
                  fontWeight={"700"}
                  color={pathname.split("/")[1] === "" ? "#D6EE4A" : "#FFF"}
                >
                  HOME
                </Text>
              </Link>

              <Link
                href="/lashes"
                display="block"
                mb={2}
                onClick={() => setIsDrawerOpen(false)}
              >
                <Text
                  fontWeight={"700"}
                  color={
                    pathname.split("/")[1] === "lashes" ? "#D6EE4A" : "#FFF"
                  }
                >
                  LASHES
                </Text>
              </Link>
              <Link
                href="/nailbar"
                display="block"
                mb={2}
                onClick={() => setIsDrawerOpen(false)}
              >
                <Text
                  fontWeight={"700"}
                  color={
                    pathname.split("/")[1] === "nailbar" ? "#D6EE4A" : "#FFF"
                  }
                >
                  NAIL BAR
                </Text>
              </Link>
              <Link
                href="/manipedi"
                display="block"
                mb={2}
                onClick={() => setIsDrawerOpen(false)}
              >
                <Text
                  fontWeight={"700"}
                  color={
                    pathname.split("/")[1] === "manipedi" ? "#D6EE4A" : "#FFF"
                  }
                >
                  MANI/PEDI
                </Text>
              </Link>
              <Link
                href="/products"
                display="block"
                mb={2}
                onClick={() => setIsDrawerOpen(false)}
              >
                <Text
                  fontWeight={"700"}
                  color={
                    pathname.split("/")[1] === "products" ? "#D6EE4A" : "#FFF"
                  }
                >
                  PRODUCTS
                </Text>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Desktop View */}
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        display={{ base: "none", md: "grid" }}
      >
        <Box>
          <Link href="/">
            <Image width={70} height={30} src="/logo.png" alt="Logo" priority />
          </Link>
        </Box>
        <Box display="flex" alignItems="center" gap={4}>
          <Link href="/">
            <Text
              fontWeight={"700"}
              color={pathname.split("/")[1] === "" ? "#D6B34A" : "#FFF"}
            >
              HOME
            </Text>
          </Link>
          <Link href="/lashes">
            <Text
              fontWeight={"700"}
              color={pathname.split("/")[1] === "lashes" ? "#D6B34A" : "#FFF"}
            >
              LASHES
            </Text>
          </Link>
          <Link href="/nailbar">
            <Text
              fontWeight={"700"}
              color={pathname.split("/")[1] === "nailbar" ? "#D6B34A" : "#FFF"}
              whiteSpace="nowrap"
            >
              NAIL BAR
            </Text>
          </Link>
          <Link href="/manipedi">
            <Text
              fontWeight={"700"}
              color={pathname.split("/")[1] === "manipedi" ? "#D6B34A" : "#FFF"}
            >
              MANI/PEDI
            </Text>
          </Link>
          <Link href="/products">
            <Text
              fontWeight={"700"}
              color={pathname.split("/")[1] === "products" ? "#D6B34A" : "#FFF"}
            >
              PRODUCTS
            </Text>
          </Link>
          <Menu>
            <MenuButton>
              <Text fontWeight={"700"} color={"#FFF"}>
                MORE
              </Text>
            </MenuButton>
            <MenuList
              display={"inline-block"}
              backgroundColor={"#F7ADC0"}
              position={"relative"}
              zIndex={1}
            >
              <MenuItem backgroundColor={"#F7ADC0"}>
                <Link href="/gallery">
                  <Text
                    fontWeight={"700"}
                    color={
                      pathname.split("/")[1] === "gallery" ? "#D6B34A" : "#FFF"
                    }
                  >
                    GALLERY
                  </Text>
                </Link>
              </MenuItem>
              <MenuItem backgroundColor={"#F7ADC0"}>
                <Link href="/contact">
                  <Text
                    fontWeight={"700"}
                    color={
                      pathname.split("/")[1] === "contact" ? "#D6B34A" : "#FFF"
                    }
                  >
                    CONTACT
                  </Text>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button color="primary" onClick={() => router.push("/cart")}>
            <Box display="flex" gap={3}>
              <Icon as={FaCartArrowDown} />
              <>Cart</>
              <Badge variant="subtle" colorScheme="#F7ADC0">
                {cartNumb}
              </Badge>
            </Box>
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};
