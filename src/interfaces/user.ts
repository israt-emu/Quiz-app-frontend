export type IUser = {
  _id: string;
  email: string;
  password: string;
  name: string;
  contactNo: string;
  role: "admin" | "performer";
  profileImg?: string;
  address: string;
};
export type IUserProps = {
  user: IUser;
};
export type IUsersProps = {
  users: IUser[];
};

export type IStatProps = {
  users: number;
  products: number;
  admins: number;
};
