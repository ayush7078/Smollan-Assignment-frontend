import React from "react";
import { Card, Descriptions } from "antd";

const InfoSection = ({ info }) => {
    return (
      <>
        <Card title="Info" style={{ marginTop: 5 }} headStyle={{ backgroundColor: 'skyblue', color: 'white'}}>
          <Descriptions bordered column={1} size="large">
            <Descriptions.Item label="Filters Selected" span={3}>
              {info.filter}
            </Descriptions.Item>
            <Descriptions.Item label="Data Source" span={3}>
              {info.source}
            </Descriptions.Item>
            <Descriptions.Item label="Date Range" span={3}>
              {info.dateRange}
            </Descriptions.Item>
            <Descriptions.Item label="Sales Quantity Range" span={3}>
              {`${info.salesQuantityRange[0]} - ${info.salesQuantityRange[1]}`}
            </Descriptions.Item>
            <Descriptions.Item label="Revenue Range" span={3}>
              {`$${info.revenueRange[0]} to $${info.revenueRange[1]}`}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </>
    );
  };
  
export default InfoSection;
