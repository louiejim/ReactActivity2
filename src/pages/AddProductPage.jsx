import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";

function AddProductPage() {
  const handleSubmit = () => {
    console.log("from add employee page handle submit");
  };

  return (
    <div>
      <ProductForm onSubmit={handleSubmit}></ProductForm>
    </div>
  );
}

export default AddProductPage;
