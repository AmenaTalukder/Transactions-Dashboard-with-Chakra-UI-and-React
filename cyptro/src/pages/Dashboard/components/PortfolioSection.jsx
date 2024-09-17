import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { BsInfoCircleFill } from "react-icons/bs";
import { LuArrowUpToLine, LuArrowDownToLine } from "react-icons/lu";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "center"
      }}
      flexDir={{
        base: "column",
        xl: "row"
      }}
      spacing={{
        base: 4,
        xl: 8
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 16
        }}
        align={{
          base: "flex-start",
          xl: "center"
        }}
        flexDir={{
          base: "column",
          xl: "row"
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={BsInfoCircleFill} />
          </HStack>
          <Text textStyle="h5" fontWeight="medium">
            $ 112,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            align={{
              base: "flex-start",
              sm: "center"
            }}
            flexDir={{
              base: "column",
              sm: "row"
            }}
            spacing={{
              base: 4,
              xl: 8
            }}
          >
            <HStack>
              <Text textStyle="h5" fontWeight="medium">
                2,23,94,010.00
              </Text>
              <Tag colorScheme="gray">BDT</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h5" fontWeight="medium">
                $1,300.00
              </Text>
              <Tag colorScheme="gray">Dollar</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={LuArrowUpToLine} />}>Deposit</Button>
        <Button leftIcon={<Icon as={LuArrowDownToLine} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
