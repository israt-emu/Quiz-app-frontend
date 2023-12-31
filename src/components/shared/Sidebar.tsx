/* eslint-disable @typescript-eslint/no-unused-vars */
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {sidebarActiveChange} from "@/redux/features/activeLink/activeLinkSlice";
import {pathChange} from "@/redux/features/filter/filterSlice";
import Link from "next/link";
import {useRouter} from "next/router";
//sidebar of seller dashboard
const Sidebar = () => {
  const active = useAppSelector((state) => state?.active?.sidebarActive);
  const path = useAppSelector((state) => state?.filter?.path);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const linkArr = path.split("/");
    const activeLink = linkArr[linkArr.length - 1];
    dispatch(sidebarActiveChange(activeLink));
  }, [path, dispatch]);

  //changing path when route change
  useEffect(() => {
    dispatch(pathChange(router.pathname));
  }, [location, dispatch]);

  return (
    <div className={`md:flex flex-col bg-secondary h-full text-secondary-foreground`}>
      <div className="space-y-3  ">
        <div className="flex-1">
          {/* <img src={logo} alt="logo" className="w-14" /> */}
          {/* sidebar link  */}
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className={`${active === "seller" ? "link-active" : "link-hover"}`}>
              <Link href="/dashboard" className="link-styles">
                Dashboard
              </Link>
            </li>

            <li className={`${active === "blogs" ? "link-active" : "link-hover"}`}>
              <Link href="/dashboard/blogs" className="link-styles">
                Blogs
              </Link>
            </li>
            <li className={`${active === "categories" ? "link-active" : "link-hover"}`}>
              <Link href="/dashboard/categories" className="link-styles">
                Categories
              </Link>
            </li>
            <li className={`${active === "quizes" ? "link-active" : "link-hover"}`}>
              <Link href="/dashboard/quizes" className="link-styles">
                Quizzes
              </Link>
            </li>
            <li className={`${active === "users" ? "link-active" : "link-hover"}`}>
              <Link href="/dashboard/users" className="link-styles">
                Users
              </Link>
            </li>
            <li className={`${active === "/" ? "link-active" : "link-hover"}`}>
              <Link href="/" className="link-styles">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
