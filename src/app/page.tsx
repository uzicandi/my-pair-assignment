"use client";

import React from "react";
import TodoUserListPage from "../components/pages/TodoUserListPage";
import TodoFetchBoundary from "../components/features/TodoFetchBoundary";

const Page = () => {
  return (
    <TodoFetchBoundary>
      <TodoUserListPage />
    </TodoFetchBoundary>
  );
};

export default Page;
