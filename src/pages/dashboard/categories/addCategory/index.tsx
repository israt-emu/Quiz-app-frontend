import AddCategoryForm from "@/components/form/AddCategoryForm";
import DashboardLayout from "@/layouts/Admin";
import React from "react";

const AddCategory = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <AddCategoryForm />
      </div>
      {/* <UserTable /> */}
    </DashboardLayout>
  );
};

export default AddCategory;
