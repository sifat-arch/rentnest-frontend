/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-empty-object-type */
// "use client";

// import React, { useState } from "react";
// import {
//   Users,
//   House,
//   ClipboardList,
//   FolderTree,
//   CheckCircle2,
//   UserX,
//   Trash2,
//   FolderCog,
//   Eye,
//   MessageSquare,
//   ShieldCheck,
//   Activity,
//   Info,
//   Sparkles,
//   ArrowRight,
//   Building2,
// } from "lucide-react";

// // --- Base UI Components (Light Mode Only) ---

// interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
// const Card = React.forwardRef<HTMLDivElement, CardProps>(
//   ({ className = "", ...props }, ref) => (
//     <div
//       ref={ref}
//       className={`rounded-xl border border-slate-200/80 bg-white text-slate-950 shadow-xs transition-all ${className}`}
//       {...props}
//     />
//   ),
// );
// Card.displayName = "Card";

// const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(
//   ({ className = "", ...props }, ref) => (
//     <div
//       ref={ref}
//       className={`flex flex-col space-y-1.5 p-6 ${className}`}
//       {...props}
//     />
//   ),
// );
// CardHeader.displayName = "CardHeader";

// const CardTitle = React.forwardRef<
//   HTMLParagraphElement,
//   React.HTMLAttributes<HTMLHeadingElement>
// >(({ className = "", ...props }, ref) => (
//   <h3
//     ref={ref}
//     className={`text-xl font-semibold leading-none tracking-tight text-slate-900 ${className}`}
//     {...props}
//   />
// ));
// CardTitle.displayName = "CardTitle";

// const CardDescription = React.forwardRef<
//   HTMLParagraphElement,
//   React.HTMLAttributes<HTMLParagraphElement>
// >(({ className = "", ...props }, ref) => (
//   <p ref={ref} className={`text-sm text-slate-500 ${className}`} {...props} />
// ));
// CardDescription.displayName = "CardDescription";

// const CardContent = React.forwardRef<HTMLDivElement, CardProps>(
//   ({ className = "", ...props }, ref) => (
//     <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
//   ),
// );
// CardContent.displayName = "CardContent";

// interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
//   variant?: "default" | "outline" | "success";
// }
// const Badge = ({
//   className = "",
//   variant = "default",
//   ...props
// }: BadgeProps) => {
//   const variantStyles = {
//     default: "bg-indigo-50 text-indigo-700 border-indigo-200",
//     outline: "text-slate-800 border-slate-200 bg-slate-50",
//     success: "bg-emerald-50 text-emerald-700 border-emerald-200",
//   };
//   return (
//     <div
//       className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none ${variantStyles[variant]} ${className}`}
//       {...props}
//     />
//   );
// };

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "primary" | "outline" | "ghost";
// }
// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className = "", variant = "primary", ...props }, ref) => {
//     const variantStyles = {
//       primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-xs",
//       outline:
//         "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900",
//       ghost: "hover:bg-slate-100 text-slate-900",
//     };
//     return (
//       <button
//         ref={ref}
//         className={`inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${variantStyles[variant]} ${className}`}
//         {...props}
//       />
//     );
//   },
// );
// Button.displayName = "Button";

// const Separator = ({ className = "" }: { className?: string }) => (
//   <div className={`h-[1px] w-full bg-slate-200 ${className}`} />
// );

// // --- Main RentNest Admin Dashboard Component (Light Theme) ---

// export default function RentNestAdminDashboard() {
//   const [activeToast, setActiveToast] = useState<string | null>(null);

//   const handleQuickAction = (actionName: string) => {
//     setActiveToast(`Navigating to ${actionName}...`);
//     setTimeout(() => setActiveToast(null), 3000);
//   };

//   const quickActions = [
//     {
//       id: "users",
//       title: "Manage Users",
//       description:
//         "View, block, or manage registered customer and landlord accounts.",
//       icon: Users,
//       color: "bg-indigo-50 text-indigo-600",
//     },
//     {
//       id: "properties",
//       title: "Manage Properties",
//       description:
//         "Review, approve, or remove published rental property listings.",
//       icon: House,
//       color: "bg-emerald-50 text-emerald-600",
//     },
//     {
//       id: "bookings",
//       title: "Manage Bookings",
//       description:
//         "Track active tenant reservations, payouts, and rental history.",
//       icon: ClipboardList,
//       color: "bg-amber-50 text-amber-600",
//     },
//     {
//       id: "category",
//       title: "Create Category",
//       description:
//         "Organize homes, apartments, and villas into searchable categories.",
//       icon: FolderTree,
//       color: "bg-purple-50 text-purple-600",
//     },
//   ];

//   const platformFeatures = [
//     "User Management",
//     "Property Management",
//     "Booking Management",
//     "Review Management",
//     "Category Management",
//     "Secure Stripe Payments",
//   ];

//   const adminResponsibilities = [
//     {
//       label: "Manage registered users",
//       icon: Users,
//       accent: "text-indigo-600",
//     },
//     { label: "Block / Unblock users", icon: UserX, accent: "text-rose-600" },
//     {
//       label: "Delete inappropriate properties",
//       icon: Trash2,
//       accent: "text-amber-600",
//     },
//     {
//       label: "Manage property categories",
//       icon: FolderCog,
//       accent: "text-purple-600",
//     },
//     { label: "Monitor all bookings", icon: Eye, accent: "text-blue-600" },
//     {
//       label: "Moderate reviews",
//       icon: MessageSquare,
//       accent: "text-emerald-600",
//     },
//   ];

//   const systemStatuses = [
//     "API Connected",
//     "Database Connected",
//     "Authentication Active",
//     "Stripe Payment Enabled",
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50/60 p-4 md:p-8 text-slate-900">
//       <div className="mx-auto max-w-7xl space-y-8">
//         {/* Toast Notification Banner */}
//         {activeToast && (
//           <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 py-3 shadow-lg">
//             <Sparkles className="h-4 w-4 text-indigo-600 animate-pulse" />
//             <span className="text-sm font-medium text-slate-800">
//               {activeToast}
//             </span>
//           </div>
//         )}

//         {/* Header Section */}
//         <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-6 md:flex-row md:items-center md:justify-between">
//           <div className="space-y-1.5">
//             <div className="flex items-center gap-2.5">
//               <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-xs">
//                 <Building2 className="h-5 w-5" />
//               </div>
//               <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
//                 Admin Dashboard
//                 <ShieldCheck className="h-6 w-6 text-indigo-600" />
//               </h1>
//             </div>
//             <p className="text-sm text-slate-500 md:text-base">
//               Manage users, properties, bookings and categories from one place.
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             <Badge variant="default" className="gap-1.5 py-1.5">
//               <span className="relative flex h-2 w-2">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
//                 <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
//               </span>
//               RentNest Live Admin Panel
//             </Badge>
//           </div>
//         </div>

//         {/* Quick Actions Section */}
//         <section className="space-y-4">
//           <h2 className="text-lg font-semibold text-slate-900">
//             Quick Actions
//           </h2>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {quickActions.map((action) => {
//               const IconComponent = action.icon;
//               return (
//                 <Card
//                   key={action.id}
//                   onClick={() => handleQuickAction(action.title)}
//                   className="group relative cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md"
//                 >
//                   <CardHeader className="space-y-3 p-5">
//                     <div className="flex items-center justify-between">
//                       <div
//                         className={`flex h-11 w-11 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105 ${action.color}`}
//                       >
//                         <IconComponent className="h-5 w-5" />
//                       </div>
//                       <ArrowRight className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-indigo-600" />
//                     </div>
//                     <div className="space-y-1">
//                       <CardTitle className="text-base font-semibold group-hover:text-indigo-600">
//                         {action.title}
//                       </CardTitle>
//                       <CardDescription className="line-clamp-2 text-xs leading-relaxed">
//                         {action.description}
//                       </CardDescription>
//                     </div>
//                   </CardHeader>
//                 </Card>
//               );
//             })}
//           </div>
//         </section>

//         {/* Grid Layout for Features & Responsibilities */}
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//           {/* Platform Features Card */}
//           <Card className="flex flex-col justify-between">
//             <CardHeader className="border-b border-slate-100 pb-4">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <CardTitle className="text-lg">Platform Features</CardTitle>
//                   <CardDescription className="text-xs">
//                     Core capabilities enabled across the RentNest ecosystem
//                   </CardDescription>
//                 </div>
//                 <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
//                   <Sparkles className="h-4 w-4" />
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent className="p-6">
//               <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//                 {platformFeatures.map((feature, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-3 rounded-lg border border-slate-200/60 bg-slate-50/70 p-3 text-sm font-medium text-slate-800"
//                   >
//                     <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
//                     <span>{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>

//           {/* Admin Responsibilities Card */}
//           <Card className="flex flex-col justify-between">
//             <CardHeader className="border-b border-slate-100 pb-4">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <CardTitle className="text-lg">
//                     Admin Responsibilities
//                   </CardTitle>
//                   <CardDescription className="text-xs">
//                     Platform moderation and administrator privileges
//                   </CardDescription>
//                 </div>
//                 <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
//                   <ShieldCheck className="h-4 w-4" />
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent className="p-6">
//               <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//                 {adminResponsibilities.map((item, index) => {
//                   const ItemIcon = item.icon;
//                   return (
//                     <div
//                       key={index}
//                       className="flex items-center gap-3 rounded-lg border border-slate-200/60 bg-white p-3 text-sm font-medium text-slate-700 shadow-2xs"
//                     >
//                       <ItemIcon className={`h-4 w-4 shrink-0 ${item.accent}`} />
//                       <span>{item.label}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* System Status & About Section */}
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
//           {/* System Status Card */}
//           <Card className="lg:col-span-1">
//             <CardHeader className="pb-4">
//               <div className="flex items-center justify-between">
//                 <CardTitle className="text-lg">System Status</CardTitle>
//                 <Activity className="h-4 w-4 text-emerald-600 animate-pulse" />
//               </div>
//               <CardDescription className="text-xs">
//                 Real-time connection & microservices health
//               </CardDescription>
//             </CardHeader>
//             <Separator />
//             <CardContent className="space-y-3 pt-5">
//               {systemStatuses.map((status, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-between rounded-lg border border-emerald-100 bg-emerald-50/50 px-3.5 py-2.5"
//                 >
//                   <span className="text-xs font-semibold text-slate-700">
//                     {status}
//                   </span>
//                   <Badge
//                     variant="success"
//                     className="gap-1 px-2 py-0.5 text-[11px]"
//                   >
//                     <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
//                     Operational
//                   </Badge>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>

//           {/* About RentNest Card */}
//           <Card className="lg:col-span-2">
//             <CardHeader className="pb-4">
//               <div className="flex items-center gap-2">
//                 <Info className="h-5 w-5 text-indigo-600" />
//                 <CardTitle className="text-lg">About RentNest</CardTitle>
//               </div>
//               <CardDescription className="text-xs">
//                 Comprehensive rental property management architecture
//               </CardDescription>
//             </CardHeader>
//             <Separator />
//             <CardContent className="pt-5">
//               <div className="rounded-xl bg-slate-50/80 border border-slate-100 p-5">
//                 <p className="text-sm leading-relaxed text-slate-600">
//                   RentNest is a modern rental property management platform where
//                   landlords publish rental properties, tenants book homes
//                   securely through Stripe payments, and leave reviews after
//                   successful bookings. Administrators manage users, categories,
//                   properties, bookings and maintain the overall platform.
//                 </p>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   <Badge variant="outline" className="text-[11px]">
//                     Next.js 16 App Router
//                   </Badge>
//                   <Badge variant="outline" className="text-[11px]">
//                     Stripe Checkout API
//                   </Badge>
//                   <Badge variant="outline" className="text-[11px]">
//                     Tailwind CSS
//                   </Badge>
//                   <Badge variant="outline" className="text-[11px]">
//                     TypeScript
//                   </Badge>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { getAllUsers } from "./_actions/getAllUsers";
import { getProperties } from "@/app/(publicGroup)/_actions/getProperties";
import { getAllBookings } from "./_actions/getAllBookings";
import AdminStats from "./_components/AdminStats";
const users = await getAllUsers();
const properties = await getProperties({ query: {} });
const bookings = await getAllBookings({ query: {} });

const AdminDashobard = () => {
  return (
    <div>
      <AdminStats
        totalUsers={users.data.length}
        totalProperties={properties.data.length}
        totalBookings={bookings.data.length}
        pendingBookings={
          bookings.data.filter((item: any) => item.status === "PENDING").length
        }
      />
    </div>
  );
};

export default AdminDashobard;
