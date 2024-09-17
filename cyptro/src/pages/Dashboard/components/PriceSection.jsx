import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/CustomCard";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { FaFaceSadTear } from "react-icons/fa6";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "8:34 PM", "9:45 PM", "10:15 PM", "11:30 PM"];

  return (
    <CustomCard>
      <Flex align="start" justify="space-between" mt="12px">
        <Stack>
          <HStack color="black.80" margin="0 16px">
            <Text fontSize="sm">Current Price</Text>
          </HStack>
          <HStack gap={4} margin="0 16px">
            <Text textStyle="h5" fontWeight="medium">
              $ 112,312.24
            </Text>
            <HStack fontWeight="bold" color="green.500">
              <Icon as={BsArrowUpRight} />
              <Text fontSize="lg" fontWeight="bold">
                22%
              </Text>
            </HStack>
          </HStack>
        </Stack>

        <HStack>
          <Button leftIcon={<Icon as={FaPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>

      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4px"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" mt="50px" src="/Graph.svg" alt="Graph Image" />
            <HStack justify="space-between">
              {timestamps.map((timestamp, index) => (
                <Text key={index} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>
              `One day panelle does not exsit yet .Sorry!{" "}
              <Icon as={FaFaceSadTear}></Icon>`
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              `One week panelle does not exsit yet .Sorry!{" "}
              <Icon as={FaFaceSadTear}></Icon>`
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              `One month panelle does not exsit yet .Sorry!{" "}
              <Icon as={FaFaceSadTear}></Icon>`
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
