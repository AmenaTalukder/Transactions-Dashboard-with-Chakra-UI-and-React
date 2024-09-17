import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { FcOnlineSupport } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
const SideNav = () => {
  const location = useLocation();
  console.log(location);

  const isActiveLink = (link) => {
    return location.pathname === link;
  };
  const navLinks = [
    {
      icon: TbLayoutDashboardFilled,
      text: "Dashboard",
      link: "/"
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions"
    }
  ];
  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg"
      }}
      w={{
        base: "100%",
        lg: "16rem"
      }}
      h="100vh"
    >
      <Box>
        <Heading textAlign="Center" fontSize="20px" as="h1" pt="14">
          @DOSOMECOADING
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                borderRadius="10px"
                as="a"
                href={nav.link}
                py="3"
                px="4"
                bg={isActiveLink(nav.link) ? "#F3F3F7 " : "transparent"}
                bgColor={isActiveLink(nav.link) ? "#171717 " : "transparent"}
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717"
                }}
                color="#797E82"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="800" color="#797E82">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            as="a"
            py="3"
            bg={isActiveLink("/support") ? "#F3F3F7 " : "transparent"}
            bgColor={isActiveLink("/support") ? "#171717 " : "transparent"}
            px="4"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717"
            }}
            // color="#757f82"
          >
            <Icon as={FcOnlineSupport} />
            <Text fontSize="14px" fontWeight="bold" color="#757f82">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
