import { Button } from "@/components/ui/button";
import { LuMenu } from "react-icons/lu";
import {
  useBreakpointValue,
  Separator,
  Link,
  Grid,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

const Menu = () => {
  const isSmallScreen = useBreakpointValue({
    base: false,
    md: false,
    sm: true,
  });
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <LuMenu />
        </Button>
      </MenuTrigger>
      <MenuContent width="97vw">
        <MenuItem value="new-txt">
          <Flex
            width="97vw"
            backgroundColor="red"
            justify="space-between"
            align="center"
          >
            <Text>Platform</Text>
            <LuMenu />
          </Flex>
        </MenuItem>
        <Separator />
        <MenuItem value="new-file">New File...</MenuItem>
        <Separator />
        <MenuItem value="new-win">New Window</MenuItem>
        <Separator />
        <MenuItem value="open-file">Open File...</MenuItem>
        <Separator />
        <MenuItem value="export">Export</MenuItem>
        {isSmallScreen ? (
          // <Separator />
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
      </MenuContent>
    </MenuRoot>
  );
};
export default Menu;
