import { useState } from "react";
import "./App.css";
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
import { InformationCircleIcon } from "@heroicons/react/outline";
import Tabs from "./components/tabs";
import Navbar from "./components/Navbar/navbar";
import Slider from "./components/Slider/slider";
import DonutChartComponent from "./components/DonutChart";
import Map from "./components/map";

export const performance = [
  {
    date: "2021-01-01",
    Sales: 900.73,
    Profit: 173,
    Customers: 73,
  },
  {
    date: "2021-01-02",
    Sales: 1000.74,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-03",
    Sales: 1100.93,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-04",
    Sales: 1200.9,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-05",
    Sales: 1200.98,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-06",
    Sales: 1300,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-07",
    Sales: 1300.96,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-08",
    Sales: 1200.05,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-09",
    Sales: 350.98,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-10",
    Sales: 1100.7,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-11",
    Sales: 1100.57,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-12",
    Sales: 1100.66,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-03-13",
    Sales: 882,
    Profit: 682,
    Customers: 682,
  },
  {
    date: "2021-01-14",
    Sales: 1100.7,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-15",
    Sales: 1100.57,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-16",
    Sales: 1100.66,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-03-17",
    Sales: 882,
    Profit: 682,
    Customers: 682,
  },
  {
    date: "2021-01-18",
    Sales: 350.98,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-19",
    Sales: 1100.7,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-20",
    Sales: 1100.57,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-01-21",
    Sales: 1100.66,
    Profit: 174.6,
    Customers: 74,
  },
  {
    date: "2021-03-22",
    Sales: 882,
    Profit: 682,
    Customers: 682,
  },
  {
    date: "2021-01-23",
    Sales: 1100.7,
    Profit: 174.6,
    Customers: 74,
  },
];

// Basic formatters for the chart values
const dollarFormatter = (value) =>
  `$ ${Intl.NumberFormat("us").format(value).toString()}`;

const numberFormatter = (value) =>
  `${Intl.NumberFormat("us").format(value).toString()}`;

function App() {
  const [selectedKpi, setSelectedKpi] = useState("Sales");
  const [isActive, setIsActive] = useState(false);

  // map formatters by selectedKpi
  const formatters = {
    Sales: dollarFormatter,
    Profit: dollarFormatter,
    Customers: numberFormatter,
  };

  const handleChangeProgressBar = () => {
    console.log(document.x);
  };

  const handleMainClick = () => {
    setIsActive(false);
  };
  return (
    <>
      <Navbar setIsActive={setIsActive} isActive={isActive} />
      <main
        className={`main pt-[6.5rem]${isActive ? " main-blur" : ""}`}
        onClick={handleMainClick}
      >
        <div className="m-10">
          <Map />
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
      </main>
    </>
  );
}

export default App;
