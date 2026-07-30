import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface IProperty {
  id: string;
  title: string;
  location: string;
  price: number;
  description: string;
  image: string;
  categoryId: string;
  landlordId: string;
  createdAt: string;
  reviews: [];
  category: {
    id: string;
    name: string;
  };
}

type IUserProfileResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  meta: null;
  data: {
    id: string;
    name: string;
    email: string;
    role: "TENANT" | "LANDLORD" | "ADMIN";
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
    createdAt: string;
  };
};
export type NavbarProps = {
  user: IUserProfileResponse;
};
export type ISidebarItems = {
  label: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};
// export type IProperty = {
//   success: boolean;
//   statusCode: number;
//   message: string;
//   meta: null;
//   data: {
//     id: string;
//     title: string;
//     location: string;
//     price: number;
//     description: string;
//     image: string | null;
//     categoryId: string;
//     landlordId: string;
//     createdAt: string;
//     category: {
//       id: string;
//       name: string;
//     };
//   };
// };
