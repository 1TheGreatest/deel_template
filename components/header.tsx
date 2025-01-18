"use client";
import { Button } from "@/components/ui/button";
import Menu from "@/components/menu";

import {
  Box,
  Flex,
  Link,
  Image,
  // Heading,
  // Text,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";

const Header = () => {
  // const { open, onOpen, onClose } = useDisclosure();

  // Determine visibility based on screen size
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
    md: false,
    sm: false,
  });
  const isSmallScreen = useBreakpointValue({
    base: false,
    md: false,
    sm: true,
  });

  return (
    <Box
      as="header"
      bg="white"
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="1000"
      px={{ base: 4, md: 8 }}
      py={4}
    >
      <Flex justify="space-between" align="center">
        <Link href="/">
          <Image
            src="https://deel-website-media-prod.s3.amazonaws.com/logo_revamp_164ddaed0c.svg"
            alt="Deel Logo"
            boxSize="50px"
          />
        </Link>
        {isLargeScreen ? (
          <Flex align="center" gap={4}>
            <Link
              href="#platform"
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
            >
              Platform
            </Link>
            <Link
              href="#solutions"
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
            >
              Solutions
            </Link>
            <Link
              href="#why-deel"
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
            >
              Why Deel
            </Link>
            <Link
              href="#pricing"
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
            >
              Pricing
            </Link>
          </Flex>
        ) : null}

        <Flex align="center" gap={2}>
          <Button
            as={Link}
            // href="/login"
            variant="outline"
            borderRadius="full"
            px={6}
          >
            Log In
          </Button>
          {!isSmallScreen ? (
            <Button
              as={Link}
              // href="/request-a-demo"
              colorScheme="blue"
              borderRadius="full"
              px={6}
            >
              Book a Demo
            </Button>
          ) : null}
          {!isLargeScreen ? <Menu /> : null}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
