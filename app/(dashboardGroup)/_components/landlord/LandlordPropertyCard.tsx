import Image from "next/image";
import { Pencil, Trash2, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { IProperty } from "@/lib/types";
import Link from "next/link";

type Props = {
  property: IProperty;
};

const LandlordPropertyCard = ({ property }: Props) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-56 w-full">
        <Image
          src={property.image || "/placeholder-property.jpg"}
          alt={property.title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="line-clamp-1 text-lg font-semibold">
            {property.title}
          </h2>

          <Badge>৳ {property.price.toLocaleString()}</Badge>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {property.location}
        </div>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {property.description}
        </p>
      </CardContent>

      <CardFooter className="flex justify-end gap-3">
        <Link href={`/landlord-dashboard/update-property/${property.id}`}>
          <Button size="icon" variant="outline">
            <Pencil className="h-4 w-4" />
          </Button>
        </Link>

        <Button size="icon" variant="destructive">
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LandlordPropertyCard;
