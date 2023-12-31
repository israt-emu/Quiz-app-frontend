import AddQuizForm from "@/components/form/AddQuizForm";
import DashboardLayout from "@/layouts/Admin";
import Link from "next/link";
import React from "react";

const AddQuize = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <AddQuizForm />
      </div>
      {/* <UserTable /> */}
    </DashboardLayout>
  );
};

export default AddQuize;
