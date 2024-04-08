import React from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";

function EditProductPage({ counters }) {
  const { id } = useParams();
  const filteredCounter = counters.find((m) => m.id == id);

  return (
    <div>
      <ProductForm counter={filteredCounter}></ProductForm>
    </div>
  );
}

export default EditProductPage;
