import React, { useState } from "react";
import Tabs from "./tabs";
import { InformationCircleIcon } from "@heroicons/react/outline";
import {
  AreaChart,
  Card,
  Flex,
  Icon,
  Metric,
  ProgressBar,
  Text,
  Title,
  Toggle,
  ToggleItem,
} from "@tremor/react";
import DonutChartComponent from "./DonutChart";

// Basic formatters for the chart values
const dollarFormatter = (value) =>
  `$ ${Intl.NumberFormat("us").format(value).toString()}`;

const numberFormatter = (value) =>
  `${Intl.NumberFormat("us").format(value).toString()}`;

const Home = () => {
  const [selectedKpi, setSelectedKpi] = useState("Sales");
  // map formatters by selectedKpi
  const formatters = {
    Sales: dollarFormatter,
    Profit: dollarFormatter,
    Customers: numberFormatter,
  };

  const handleChangeProgressBar = () => {
    console.log(document.x);
  };
  return (
    <div>
      <Tabs />
      <Card
        className="max-w-xs mx-auto my-4"
        decoration="bottom"
        decorationColor="indigo"
      >
        <Text>Sales</Text>
        <Metric>$ 34,743</Metric>
        <Flex className="mt-4">
          <Text>32% of annual target</Text>
          <Text>$ 225,000</Text>
        </Flex>
        <ProgressBar
          onChange={handleChangeProgressBar}
          percentageValue={32}
          className="mt-2 cursor-pointer"
        />
      </Card>
      <Card decoration="bottom" decorationColor="indigo">
        <div className="md:flex justify-between">
          <div>
            <Flex
              justifyContent="start"
              className="space-x-0.5"
              alignItems="center"
            >
              <Title> Performance History </Title>
              <Icon
                icon={InformationCircleIcon}
                variant="simple"
                tooltip="Shows day-over-day (%) changes of past performance"
              />
            </Flex>
            <Text> Daily increase or decrease per domain </Text>
          </div>
          <div className="mt-6 md:mt-0">
            <Toggle
              color="zinc"
              defaultValue={selectedKpi}
              onValueChange={(value) => setSelectedKpi(value)}
            >
              <ToggleItem value="Sales" text="Sales" />
              <ToggleItem value="Profit" text="Profit" />
              <ToggleItem value="Customers" text="Customers" />
            </Toggle>
          </div>
        </div>
        <AreaChart
          data={performance}
          index="date"
          categories={[selectedKpi]}
          colors={["blue"]}
          showLegend={false}
          valueFormatter={formatters[selectedKpi]}
          yAxisWidth={56}
          className="h-96 mt-8"
        />
      </Card>
      <DonutChartComponent />
    </div>
  );
};

export default Home;
