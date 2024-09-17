import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Grid, GridItem } from "@chakra-ui/react";
const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Grid
        gridTemplateColumns={{
          base: "repeat (1, 1fr)",
          lg: "repeate (2, 1fr)",
          sm: " repeat (1, 1fr)"
        }}
        gap={5}
      >
        <GridItem>
          <SupportCard
            icon={IoMdMail}
            leftComponent={<ContactCard />}
            title="Contact Us"
            text=" Have a question or just want to know more? Feel free to reach out to
          us."
          />
        </GridItem>

        <GridItem>
          <SupportCard
            icon={AiTwotoneMessage}
            leftComponent={
              <InfoCard
                inverted={true}
                tagText="Contact"
                imgUrl="/Visual.png"
                text="Learn more about our real estate, mortgage, and corporate account services"
              />
            }
            title="Live Chat"
            text=" Don’t have time to wait for the answer? Chat with us now."
            style={{ margin: 0, padding: 0 }}
          />
        </GridItem>
        {/* </Stack> */}
      </Grid>
    </DashboardLayout>
  );
};

export default Support;
