import {
  Button,
  Card,
  Flex,
  Icon,
  Tag,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  InputGroup,
  InputLeftElement,
  Input
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import TransactionTable from "./component/TransactionTable";
import DashboardLayout from "../../components/DashboardLayout";

const Transaction = () => {
  const tabs = [
    { name: "All", count: 349 },
    { name: "Deposit", count: 114 },
    { name: "Withdraw", count: 55 },
    { name: "Trade", count: 49 }
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mb="3">
        <Button leftIcon={<Icon as={FaDownload} />}>Export CSV</Button>
      </Flex>

      <Card>
        <Tabs>
          <TabList
            pt="4"
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            <HStack spacing={4}>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="300px" py="2" pr="6">
              <InputLeftElement pointerEvents="none" height="80%" pl="2">
                <Icon as={BsSearch} color="black.80" />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder="Search here..."
                pl="20"
                py="3"
                borderRadius="md"
                border="1px solid"
                borderColor="black.80"
                fontSize="sm"
              />
            </InputGroup>
          </TabList>

          <TabPanels>
            {tabs.map((tab, index) => (
              <TabPanel key={index}>
                <TransactionTable />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
