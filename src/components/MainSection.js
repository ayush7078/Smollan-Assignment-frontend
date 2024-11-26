import React from "react";
import Table from "./Table";
import ChartSection from "./ChartSection";

import { Card} from "antd";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore); 

const MainSection = ({ salesData, selectedProduct, dateRange, salesQuantityRange, revenueRange }) => {
  // Filter salesData based on selected product, date range, and ranges for sales quantity and revenue
  const filteredData = salesData
  .filter((item) => selectedProduct === "All Products" || item.product === selectedProduct)
  .filter((item) => {
    const itemDate = dayjs(item.date);
    const [startDate, endDate] = dateRange || [null, null];
    return (
      !startDate || !endDate || 
      (itemDate.isSameOrAfter(startDate) && itemDate.isSameOrBefore(endDate))
    );
  })
  .filter((item) => {
    return (
      item.sales >= salesQuantityRange[0] &&
      item.sales <= salesQuantityRange[1] &&
      item.revenue >= revenueRange[0] &&
      item.revenue <= revenueRange[1]
    );
  });

  return (
    <div>
      <Card title="Sales Chart" style={{ marginTop: 5}}  headStyle={{ backgroundColor: 'skyblue', color: 'white'}}>
      <ChartSection salesData={filteredData} />
 </Card>
         <Card title="Sale Table" style={{ marginTop: 5 }} headStyle={{ backgroundColor: 'skyblue', color: 'white'}}>
 
      <Table salesData={filteredData} />
 </Card>
    </div>
  );
};

export default MainSection;
 