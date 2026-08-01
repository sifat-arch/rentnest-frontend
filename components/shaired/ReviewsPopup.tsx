"use client";

import { useActionState, useCallback, useEffect, useState } from "react";
import { Loader2, MessageSquare, Trash2 } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import StarRating from "./StarRating";
import { createReview } from "@/service/createReview";
import { getReview } from "@/service/getReview";
import { deleteReview } from "@/service/deleteReview";

interface IReview {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface ReviewsPopupProps {
  postId: string;
  role: string;
}

const initialState = {
  success: false,
  message: "",
  data: null,
};

export default function ReviewsPopup({ postId, role }: ReviewsPopupProps) {
  const [open, setOpen] = useState(false);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const [state, formAction, pending] = useActionState(
    createReview,
    initialState,
  );

  const loadReviews = useCallback(async () => {
    const result = await getReview(postId);

    if (result.success) {
      setReviews(result.data);
    }
  }, [postId]);
  useEffect(() => {
    if (open) {
      loadReviews();
    }
  }, [open]);
  // Sync state if initialReviews prop updates

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);

      setComment("");
      setRating(0);

      loadReviews();
    } else {
      toast.error(state.message);
    }
  }, [state]);

  const handleDelete = async (id: string) => {
    const result = await deleteReview(id);

    if (result.success) {
      toast.success(result.message);

      loadReviews();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <MessageSquare className="mr-2 h-4 w-4" />
          {reviews.length} Reviews
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-xl max-h-[85vh] flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle>Property Reviews ({reviews.length})</DialogTitle>
        </DialogHeader>

        {/* Review Input Form */}
        <form action={formAction} className="space-y-4 pt-2">
          <input type="hidden" name="propertyId" value={postId} />
          <input type="hidden" name="rating" value={rating} />

          <div className="space-y-3">
            <StarRating value={rating} onChange={setRating} />

            <Textarea
              name="comment"
              placeholder="Write your review..."
              value={comment}
              rows={3}
              onChange={(e) => setComment(e.target.value)}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={pending || rating === 0 || !comment.trim()}
            >
              {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit Review
            </Button>
          </div>
        </form>

        <Separator className="my-2" />

        {/* Reviews List Section inside ScrollArea */}
        <ScrollArea className="flex-1 max-h-[350px] pr-4">
          {reviews.length === 0 ? (
            <div className="flex h-[150px] items-center justify-center">
              <p className="text-sm text-muted-foreground">
                No reviews yet. Be the first to leave one!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={review.id || index}>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={undefined} />
                      <AvatarFallback>
                        {review.user?.name?.charAt(0).toUpperCase() ?? "U"}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">
                            {review.user?.name ?? "Unknown User"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(review.createdAt).toLocaleDateString()}
                          </p>
                        </div>

                        <StarRating value={review.rating} readOnly size={16} />
                      </div>

                      {role === "ADMIN" && (
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleDelete(review.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      )}

                      <p className="text-sm text-muted-foreground pt-1">
                        {review.comment}
                      </p>
                    </div>
                  </div>

                  {/* Don't show separator after the last review */}
                  {index < reviews.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
