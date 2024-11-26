import React, { useState, useEffect } from "react";
import axios from "axios";
import FiltersSection from "./components/FiltersSection";
import MainSection from "./components/MainSection";
import InfoSection from "./components/InfoSection";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore); 


const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("All Products");
  const [salesData, setSalesData] = useState([]);
  const [dateRange, setDateRange] = useState(null); 
  const [salesQuantityRange, setSalesQuantityRange] = useState([0, 500]);
  const [revenueRange, setRevenueRange] = useState([0, 5000]);
  const [info, setInfo] = useState({
    filter: "All Products",
    source: "Internal Sales Database",
    dateRange: "All Dates", 
    salesQuantityRange: [0, 500],  
    revenueRange: [0, 5000],  
  });

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${backendUrl}api/sales`);
        const uniqueProducts = [
          "All Products",
          ...new Set(response.data.map((item) => item.product)),
        ];
        setProducts(uniqueProducts);
        setSalesData(response.data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (product) => {
    setSelectedProduct(product);
    setInfo({
      ...info,
      filter: product,
    });
  };

  const handleDateChange = (dates) => {
    if (dates) {
      const startDate = dayjs(dates[0]).startOf('day');
      const endDate = dayjs(dates[1]).endOf('day');
      console.log("Start Date:", startDate);
      console.log("End Date:", endDate);
      setDateRange([startDate, endDate]);
      setInfo({
        ...info,
        dateRange: `${startDate.format("MMMM D, YYYY")} - ${endDate.format("MMMM D, YYYY")}`,
      });
    } else {
      setDateRange(null);
      setInfo({
        ...info,
        dateRange: "All Dates",
      });
    }
  };
  
  const handleSalesQuantityChange = (range) => {
    setSalesQuantityRange(range);
    setInfo({
      ...info,
      salesQuantityRange: range, 
    });
  };

  const handleRevenueChange = (range) => {
    setRevenueRange(range);
    setInfo({
      ...info,
      revenueRange: range, 
    });
  };

  return (
    <div style={{ display: "flex", padding: "0px", gap: "10px" }}>
      <div style={{ flex: "1" }}>
        <FiltersSection
          products={products}
          selectedProduct={selectedProduct}
          onFilterChange={handleFilterChange}
          onDateChange={handleDateChange}
          onSalesQuantityChange={handleSalesQuantityChange}
          onRevenueChange={handleRevenueChange}
        />
      </div>
      <div style={{ flex: "2" }}>
        <MainSection
          salesData={salesData}
          selectedProduct={selectedProduct}
          dateRange={dateRange}
          salesQuantityRange={salesQuantityRange}
          revenueRange={revenueRange}
        />
      </div>
      <div style={{ flex: "1" }}>
        <InfoSection info={info} />
      </div>
    </div>
  );
};

export default App;
