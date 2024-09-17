import {
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text
} from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/CustomCard";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { TbCoinTakaFilled } from "react-icons/tb";
import { Fragment } from "react";
const Transactions = () => {
  const transactions = [
    {
      id: "1",
      Icon: TbCoinTakaFilled,
      text: "BDT Deposit",
      amount: "৳ 10004567",
      timestamp: "2023-08-06  7:45 AM"
    },

    {
      id: "3",
      Icon: PiCurrencyBtcFill,
      text: "BTC Deposit",
      amount: "4504567 BTC",
      timestamp: "2023-08-06  7:45 AM"
    },
    {
      id: "4",
      Icon: TbCoinTakaFilled,
      text: "BDT  Withdrawal",
      amount: "৳ 145004567",
      timestamp: "2023-08-06  7:45 AM"
    }
  ];
  return (
    <CustomCard h="full">
      <Text mb="6" fornSize="sm" color="black.80">
        Recent Transaction
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, index) => (
          <Fragment key={transaction.id}>
            {index != 0 && <Divider />}
            <Flex gap="4">
              <Grid
                placeItems="center"
                borderRadius={26}
                bg="black.5"
                boxSize={10}
                borderRadiud="ful"
              >
                <Icon as={transaction.Icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h7">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.40">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h7">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" colorScheme="gray" mt="6">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
