import React from "react";
import { Select, Slider, DatePicker } from "antd";
import { Card} from "antd";

const FiltersSection = ({ products, selectedProduct, onFilterChange, onDateChange, onSalesQuantityChange, onRevenueChange }) => {
  return (
    <div>
      <Card title="Filters" style={{ marginTop: 5 }} headStyle={{ backgroundColor: 'skyblue', color: 'white'}}>
      <h4>Select Products</h4>
      <Select
        value={selectedProduct}
        onChange={onFilterChange}
        style={{ width: "100%", marginBottom: "15px" }}
      >
        {products.map((product) => (
          <Select.Option key={product} value={product}>
            {product}
          </Select.Option>
        ))}
      </Select>
      <h4>Date Range</h4>
      <DatePicker.RangePicker
        format="YYYY-MM-DD"
        onChange={onDateChange}
        style={{ width: "100%", marginBottom: "15px" }}
      />

        <h4>Sales Quantity Range</h4>
        <Slider
          range
          min={0}
          max={500}
          defaultValue={[0, 500]}
          onChange={onSalesQuantityChange}
          step={10}
          style={{ marginBottom: "15px" }}
        />
        <h4>Revenue Range</h4>
        <Slider
          range
          min={0}
          max={5000}
          defaultValue={[0, 5000]}
          onChange={onRevenueChange}
          step={100}
          style={{ marginBottom: "15px" }}
        />
</Card>
    </div>
  );
};

export default FiltersSection;
