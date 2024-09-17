import {
  Box,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import { FaCircleUser } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box boxShadow="sm" px="4" bg="white">
      <HStack maxW="70rem" mx="auto" h="16" justify="space-between">
        <Icon
          as={FaBarsStaggered}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none"
          }}
        />
        <Heading fontSize="28px">{title}</Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaCircleUser} w={8} h={8} />
          </MenuButton>

          <MenuList fontSize={15}>
            <MenuItem>Support</MenuItem>
            <MenuItem>Log Out</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
