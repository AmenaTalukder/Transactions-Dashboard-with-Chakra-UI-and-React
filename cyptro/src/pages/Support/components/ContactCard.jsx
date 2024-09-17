import {
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Box,
  Stack,
  Text,
  Textarea,
  Button
} from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem">
      <Stack spacing={1}>
        <Text fontWeight="medium" fontSize="lg" flexGrow={1}>
          You will receive response within 24 hours of time of submit.
        </Text>

        <HStack
          flexDir={{
            base: "column",
            md: "row"
          }}
        >
          <FormControl>
            <FormLabel fontSize="sm" color="p.purple" fontWeight={700}>
              Name
            </FormLabel>
            <Input fontSize="sm" h="38px" placeholder="Enter Your Name.." />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="sm" color="p.purple" fontWeight={700}>
              Surename
            </FormLabel>
            <Input fontSize="sm" h="38px" placeholder="Enter Your Surename.." />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel fontSize="sm" color="p.purple" fontWeight={700}>
            Email
          </FormLabel>
          <Input
            fontSize="sm"
            h="38px"
            type="email"
            placeholder="Enter Your Email.."
          />
        </FormControl>
        <FormControl pb="14px">
          <FormLabel fontSize="sm" color="p.purple" fontWeight={700}>
            Messagee
          </FormLabel>
          <Textarea fontSize="sm" h="38px" placeholder="Enter Your Message.." />
        </FormControl>
        <Checkbox defaultChecked pb="14px">
          <Text fontSize="xs">
            I agree with
            <Box as="span" color="p.purple">
              {" "}
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm">Send a Message</Button>
          <Button fontSize="sm" colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
