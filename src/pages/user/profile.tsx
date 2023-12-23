import UserProfile from "@/components/form/UserProfile";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import MainLayout from "@/layouts/MainLayout";
import PrivateLayout from "@/layouts/PrivateLayout";
import {useGetSingleUserQuery} from "@/redux/features/users/userApi";
import {useAppSelector} from "@/redux/hooks";
import {useState} from "react";

export default function profile() {
  const userId = useAppSelector((state) => state.auth.user.id);
  const {data: user, isLoading} = useGetSingleUserQuery(userId);

  return isLoading ? (
    <h1 className="text-4xl m-3 font-bold">Loading....</h1>
  ) : (
    <PrivateLayout>
      <UserProfile user={user?.data} />
    </PrivateLayout>
  );
}
