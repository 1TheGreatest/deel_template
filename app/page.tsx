import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import {
  Box,
  Flex,
  Link,
  Image,
  Heading,
  Text,
  // useDisclosure,
  // useBreakpointValue,
} from "@chakra-ui/react";

const HeroSection = () => (
  <Box bg="blue.50" py={16} px={{ base: 4, md: 8 }} textAlign="center">
    <Heading
      as="h1"
      size="2xl"
      mb={4}
      textAlign="center"
      textTransform="capitalize"
      color="gray.700"
    >
      Payroll for global teams
    </Heading>
    <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
      Deel helps tens of thousands of companies expand globally with unmatched
      speed, flexibility, and compliance. Get our all-in-one Global People
      Platform that simplifies the way you onboard, offboard, and everything
      else in between.
    </Text>
    <Flex justify="center" mt={8} gap={4}>
      <Button colorScheme="blue" borderRadius="full" px={6}>
        Get Started
      </Button>
      <Button variant="outline" borderRadius="full" px={6}>
        Learn More
      </Button>
    </Flex>
    <Box mt={8}>
      <Image
        src="https://deel-website-media-prod.s3.amazonaws.com/Homepage_MVP_Composition_Desktop_7656d339ed.png"
        alt="Hero Image"
        maxH={{ base: "300px", md: "500px" }}
        mx="auto"
      />
    </Box>
  </Box>
);

const Footer = () => (
  <Box bg="gray.100" py={8} px={{ base: 4, md: 8 }}>
    <Flex
      justify="space-between"
      align="center"
      direction={{ base: "column", md: "row" }}
    >
      <Text color="gray.600">© 2025 Deel. All rights reserved.</Text>
      <Flex gap={4} mt={{ base: 4, md: 0 }}>
        <Link
          href="#privacy"
          color="gray.600"
          _hover={{ textDecoration: "underline" }}
        >
          Privacy Policy
        </Link>
        <Link
          href="#terms"
          color="gray.600"
          _hover={{ textDecoration: "underline" }}
        >
          Terms of Service
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}
