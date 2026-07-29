// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { IProperty } from "@/lib/types";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { PencilIcon, PlusIcon } from "lucide-react";
// import { useActionState, useEffect, useState } from "react";
// import { toast } from "sonner";
// import { createProperty, updateProperty } from "../_actions/propertyActions";

// type PropertyFormDialogProps = {
//   mode: "create" | "edit";
//   property?: IProperty;
// };

// export function PropertyFormDialog({
//   mode,
//   property,
// }: PropertyFormDialogProps) {
//   const [open, setOpen] = useState(false);

//   const action =
//     mode === "edit" && property
//       ? updateProperty.bind(null, property.id)
//       : createProperty;

//   const [state, formAction, pending] = useActionState(action, null) as any;

//   useEffect(() => {
//     if (!state) return;

//     if (state.success) {
//       toast.success(
//         state.message ||
//           (mode === "edit"
//             ? "Property updated successfully"
//             : "Property created successfully"),
//       );

//       setOpen(false);
//     } else {
//       toast.error(state.message || "Something went wrong");
//     }
//   }, [state, mode]);

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         {mode === "edit" ? (
//           <Button size="icon" variant="outline">
//             <PencilIcon className="size-4" />
//           </Button>
//         ) : (
//           <Button>
//             <PlusIcon className="mr-2 size-4" />
//             Add Property
//           </Button>
//         )}
//       </DialogTrigger>

//       <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
//         <DialogHeader>
//           <DialogTitle>
//             {mode === "edit" ? "Edit Property" : "Create Property"}
//           </DialogTitle>
//         </DialogHeader>

//         <form action={formAction} className="space-y-5">
//           <div className="space-y-2">
//             <Label htmlFor="title">Title</Label>
//             <Input
//               id="title"
//               name="title"
//               defaultValue={property?.title ?? ""}
//               placeholder="Property title"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="location">Location</Label>
//             <Input
//               id="location"
//               name="location"
//               defaultValue={property?.location ?? ""}
//               placeholder="Property location"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="price">Monthly Rent</Label>
//             <Input
//               id="price"
//               name="price"
//               type="number"
//               defaultValue={property?.price ?? ""}
//               placeholder="25000"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="image">Image URL</Label>
//             <Input
//               id="image"
//               name="image"
//               defaultValue={property?.image ?? ""}
//               placeholder="https://example.com/image.jpg"
//               required
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="description">Description</Label>
//             <Textarea
//               id="description"
//               name="description"
//               rows={5}
//               defaultValue={property?.description ?? ""}
//               placeholder="Describe your property..."
//               required
//             />
//           </div>

//           <DialogFooter>
//             <Button type="submit" disabled={pending}>
//               {pending
//                 ? "Saving..."
//                 : mode === "edit"
//                   ? "Update Property"
//                   : "Create Property"}
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }
