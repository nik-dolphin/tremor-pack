import React, { useState } from "react";
import { ChevronRightIcon, UserGroupIcon, UserIcon } from "@heroicons/react/outline";
import {
  Card,
  Flex,
  Metric,
  ProgressBar,
  Tab,
  TabList,
  Text,
} from "@tremor/react";

const LocationA = [
  {
    name: "Product A",
    percentage: 38,
    stat: "$ 100,838",
  },
  {
    name: "Product B",
    percentage: 34,
    stat: "$ 90,224",
  },
];

const LocationB = [
  {
    name: "Product Z",
    percentage: 82,
    stat: "$ 108,799",
  },
  {
    name: "Product E",
    percentage: 10,
    stat: "$ 13,268",
  },
];

const Tabs = () => {
  const [showCard, setShowCard] = useState("");

  return (
    <Card>
      <>
        <Text>Total Sales</Text>
        <Metric>$ 442,276</Metric>
        <TabList
          defaultValue="1"
          onValueChange={(value) => setShowCard(value)}
          className="mt-6"
        >
          <Tab value="1" text="Peer performance" icon={UserGroupIcon} />
          <Tab value="2" text="Individual performance" icon={UserIcon} />
          <Tab value="3" text="Personal performance" icon={ChevronRightIcon} />
        </TabList>
      </>

      {showCard === "1" ? (
        <div className="mt-6">
          {LocationA.map((item) => (
            <div className="mt-4" key={item.name}>
              <Flex className="mt-4">
                <Text>{item.name}</Text>
                <Flex className="space-x-2" justifyContent="end">
                  <Text> {item.stat} </Text>
                  <Text>
                    {" "}
                    ({item.percentage}
                    %)
                  </Text>
                </Flex>
              </Flex>
              <ProgressBar percentageValue={item.percentage} className="mt-2" />
            </div>
          ))}
        </div>
      ) : showCard === "2" ? (
        <div className="mt-6">
          {LocationB.map((item) => (
            <div className="mt-4" key={item.name}>
              <Flex className="mt-4">
                <Flex>
                  <Text> {item.name} </Text>
                </Flex>
                <Flex className="space-x-2" justifyContent="end">
                  <Text> {item.percentage}% </Text>
                  <Text> ({item.stat}) </Text>
                </Flex>
              </Flex>
              <ProgressBar percentageValue={item.percentage} className="mt-2" />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6">self created</div>
      )}
    </Card>
  );
};

export default Tabs;
