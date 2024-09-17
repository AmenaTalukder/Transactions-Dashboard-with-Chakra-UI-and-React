import { Grid, GridItem } from "@chakra-ui/react";

import PortfolioSection from "./components/portfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";
import DashboardLayout from "../../components/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat (1, 1fr)",
          xl: "repeate (2, 1fr)"
        }}
        gap={5}
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2
          }}
        >
          <PortfolioSection />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/Shapes.png"
            text="Learn more about Loans – Keep your Bitcoin, access its value without selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/Visual.png"
            tagText="Contact"
            text="Learn more about our real estate, mortgage, and corporate account services"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
