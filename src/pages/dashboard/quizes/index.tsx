import DashboardLayout from "@/layouts/Admin";
import Link from "next/link";
import React from "react";

const Quizzes = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold font-serif">Quizzes:</h1>
        <Link href={"/dashboard/quizes/addQuize"}>
          <button className="px-2 py-2 text-lg bg-primary text-primary-foreground">Add Quiz</button>
        </Link>
      </div>
      {/* <UserTable /> */}
    </DashboardLayout>
  );
};

export default Quizzes;
