import React from "react";
import { Table } from "antd";

const SalesTable = ({ salesData }) => {
  // Define columns for the Ant Design table
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
      render: (text) => `$${text.toFixed(2)}`, // Format revenue as currency
    },
  ];

  // Pagination configuration
  const paginationConfig = {
    pageSize: 5, // Set how many rows per page
    showSizeChanger: true, // Allow user to change the page size
    pageSizeOptions: ["5", "10", "20"], // Options for how many rows to show
    position: ["bottomRight"], // Position the pagination at the bottom-right
  };

  // Render the table with pagination
  return (
    <Table
      columns={columns}
      dataSource={salesData}
      pagination={paginationConfig}
      rowKey="date" // Unique key for each row, use 'date' or any unique identifier
    />
  );
};

export default SalesTable;
