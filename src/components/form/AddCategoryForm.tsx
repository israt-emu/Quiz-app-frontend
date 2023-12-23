import {ChangeEvent, FormEvent, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState} from "react";
import {Input} from "../ui/input";
import {Button} from "../ui/button";
import {useAppSelector} from "@/redux/hooks";
import Swal from "sweetalert2";
import {useRouter} from "next/router";
import {useAddCategoryMutation} from "@/redux/features/category/categoryApi";

const AddCategoryForm = () => {
  const {user} = useAppSelector((state) => state.auth);

  const [addCategory, {data, isError}] = useAddCategoryMutation();

  const [categoryTitle, setCategoryTitle] = useState("");

  const createCategory = (e: FormEvent) => {
    e.preventDefault();
    addCategory({
      title: categoryTitle,
    });
  };

  //showing success or error message
  const router = useRouter();
  useEffect(() => {
    if (!data?.success && isError) {
      Swal.fire("Oops!", `Something Went wrong`, "error");
    }
    if (data?.success && data?.data) {
      Swal.fire("Congratulations!", `Category Added successfully!`, "success");
      router.push("/dashboard/categories");
    }
  }, [isError, data, router]);

  //   console.log(categoryData);
  return (
    <div className="w-10/12 mx-auto mt-4">
      <h1 className="text-3xl font-semibold text-center mb-3 font-serif">Add Category</h1>
      <form onSubmit={createCategory} className="px-8 py-8 bg-gray-200 rounded my-4">
        <div className="grid grid-cols-2 items-center gap-2 w-full my-2">
          <div className="flex flex-col justify-center">
            <label htmlFor="title">Title</label>
            <Input type="text" id="title" name="title" value={categoryTitle} onChange={(e) => setCategoryTitle(e.target.value)} required className="rounded" />
          </div>
        </div>

        <div className="flex">
          <Button className="mt-2" type="submit">
            Add Category
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddCategoryForm;
