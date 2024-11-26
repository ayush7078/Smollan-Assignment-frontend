import React from "react";
import { Table } from "antd";

const SalesTable = ({ salesData }) => {
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Sales Quantity",
      dataIndex: "sales",
      key: "sales",
    },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
      render: (text) => `$${text.toFixed(2)}`, 
    },
  ];

  const paginationConfig = {
    pageSize: 5, // Set how many rows per page
    showSizeChanger: true, // Allow user to change the page size
    pageSizeOptions: ["5", "10", "20"], // Options for how many rows to show
    position: ["bottomRight"], 
  };

  return (
    <Table
      columns={columns}
      dataSource={salesData}
      pagination={paginationConfig}
      rowKey="date" 
    />
  );
};

export default SalesTable;
