import UserTable from "@/components/table/UserTable";
import DashboardLayout from "@/layouts/Admin";
import {useGetUsersQuery} from "@/redux/features/users/userApi";
import React from "react";

export default function users() {
  const {data} = useGetUsersQuery("");

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-semibold font-serif">Users:</h1>
      <UserTable />
    </DashboardLayout>
  );
}
