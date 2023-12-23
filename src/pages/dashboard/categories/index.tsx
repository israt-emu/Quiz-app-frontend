import DashboardLayout from "@/layouts/Admin";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold font-serif">Categories:</h1>
        <Link href={"/dashboard/categories/addCategory"}>
          <button className="px-2 py-2 text-lg bg-primary text-primary-foreground">Add Category</button>
        </Link>
      </div>
      {/* <UserTable /> */}
    </DashboardLayout>
  );
};

export default Categories;
