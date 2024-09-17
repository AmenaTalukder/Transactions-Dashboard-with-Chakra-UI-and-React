import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tag,
  Text,
  Stack
} from "@chakra-ui/react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BDT Deposit",
        tag: "E-Transfer"
      },
      amount: "+৳ 81,123",
      status: "pending"
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BDT Widthdraw",
        tag: "Wire Transfer"
      },
      amount: "-৳ 55,123",
      status: "processing"
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC"
      },
      amount: "12.0554484 BTC",
      status: "cancelled"
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC"
      },
      amount: "-2.0554484 BTC",
      status: "completed"
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit"
      },
      amount: "+15.5000000",
      status: "pending"
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw"
      },
      amount: "-5.05555544",
      status: "completed"
    }
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626"
  };

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr p="0" m="0">
            <Th p={3}>ID</Th>
            <Th p={3}>Date & Time</Th>
            <Th p={3}>Type</Th>
            <Th p={3}>Amount</Th>
            <Th p={3}>Status</Th>
          </Tr>
        </Thead>
        <Tbody color="p.black">
          {tableData.map((data) => (
            <Tr key={data.id} p="0" m="0">
              <Td p={2} fontSize="sm" fontWeight="medium">
                {data.id}
              </Td>
              <Td p={2}>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.date}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.time}
                  </Text>
                </Stack>
              </Td>
              <Td p={2}>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.type.name}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.type?.tag}
                  </Text>
                </Stack>
              </Td>
              <Td p={2} fontSize="sm" fontWeight="medium">
                {data.amount}
              </Td>
              <Td p={2} fontSize="sm" fontWeight="medium">
                <Tag
                  bg={statusColor[data.status]}
                  color="white"
                  borderRadius="full"
                >
                  {data.status}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
