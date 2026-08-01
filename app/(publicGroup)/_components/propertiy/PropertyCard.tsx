import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IProperty } from "@/lib/types";
import { CalendarDays, MapPin, MessageSquare, Tag } from "lucide-react";
import Image from "next/image";
import BookingButton from "./BookingButton";
import DeleteAdminPropertyButtion from "@/app/(dashboardGroup)/admin-dashboard/_components/DeleteAdminPropertyButtion";
import ReviewsPopup from "@/components/shaired/ReviewsPopup";

type PropertyCardProps = {
  post: IProperty;
  role: string;
};

export function PropertyCard({ post, role }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl border pt-0 transition-all duration-300 hover:shadow-lg">
      <div className="relative h-56 w-full">
        <Image
          src={post?.image}
          alt={post.title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="gap-1">
            <Tag className="size-3.5" />
            {post.category.name}
          </Badge>

          <span className="text-xl font-bold text-primary">
            ৳{post.price.toLocaleString()}
          </span>
        </div>

        <h2 className="line-clamp-2 text-xl font-semibold">{post.title}</h2>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          {post.location}
        </div>

        <p className="line-clamp-3 text-sm text-muted-foreground">
          {post.description}
        </p>

        <div className="flex items-center justify-between border-t pt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarDays className="size-4" />
            {new Date(post.createdAt).toLocaleDateString()}
          </div>

          <ReviewsPopup postId={post.id} initialReviews={post.reviews} />
        </div>

        <BookingButton propertyId={post.id} />
        {role === "ADMIN" && (
          <DeleteAdminPropertyButtion propertyId={post.id} />
        )}
      </CardContent>
    </Card>
  );
}
