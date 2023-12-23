import Link from "next/link";
import logo from "../../../assets/logo.png";
import {ShoppingBasket} from "lucide-react";
import Image from "next/image";
import {Button} from "../ui/button";
import {useAppSelector} from "@/redux/hooks";
const LowerNav = () => {
  const {user} = useAppSelector((state) => state?.auth);

  return (
    <div className="h-full w-full bg-white ">
      <div className="container flex items-center justify-between w-11/12 h-full mx-auto">
        <div className="flex items-center gap-1">
          <Image className="w-12" width={200} height={50} src={logo} alt="logo" />
          <p className="text-secondary font-serif font-semibold">
            DREAMY <br />
            EVENTS
          </p>
        </div>
        <div className="text-dark">
          <ul className="flex items-center text-xl">
            <li className="">
              <Button variant="link" asChild className="text-gray-900">
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild className="text-gray-900">
                <Link href="/quizes">Quizes</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild className="text-gray-900">
                <Link href="/bookings">Leaderboard</Link>
              </Button>
            </li>

            {user.role !== "user" && user.role && (
              <li>
                <Button variant="link" asChild className="text-gray-900">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </li>
            )}
            {/* //cart  */}
            <li>
              <Link href="/cart" className="text-gray-900 flex items-center"></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LowerNav;
