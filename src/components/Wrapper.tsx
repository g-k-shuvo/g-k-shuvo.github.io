"use client";
import React, { useState } from "react";
import Loader from "@/components/Loader";

const Wrapper: React.FC<any> = ({ content }) => {
  const [loading, setLoading] = useState(true);

  return loading ? <Loader setLoading={setLoading} /> : content;
};

export default Wrapper;
