import { Component, useState } from "react";
import Navbars from "./components/Navbars";
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import CounterPage from "./pages/CounterPage";
import { PRODUCTS_DATA } from "./PRODUCTS_DATA";
import AddProductPage from "./pages/AddProductPage";

function App() {
  const [counters, setCounters] = useState(PRODUCTS_DATA);

  const handleIncrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            value: counter.value + 1,
          };
        }
        return counter;
      })
    );
  };

  const handleDecrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            value: counter.value - 1,
          };
        }
        return counter;
      })
    );
  };

  const getCounterWithValue = () => {
    return counters.filter((counter) => counter.value > 0).length;
  };

  return (
    <>
      <div>
        <Navbars totalCount={getCounterWithValue()}></Navbars>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="counter" />} />
          <Route
            path="counter"
            element={
              <CounterPage
                counters={counters}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              ></CounterPage>
            }
          />
          <Route
            path="/addProduct"
            element={<AddProductPage></AddProductPage>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
