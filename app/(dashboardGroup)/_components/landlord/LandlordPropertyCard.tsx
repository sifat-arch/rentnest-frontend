import Image from "next/image";
import { Pencil, MapPin, Building2 } from "lucide-react";
import Link from "next/link";
import { IProperty } from "@/lib/types";
import DeletePropertyButton from "./DeletePropertyButton";

type Props = {
  property: IProperty;
};

const LandlordPropertyCard = ({ property }: Props) => {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#e7e5df] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div>
        {/* Image Preview Container */}
        <div className="relative h-52 w-full overflow-hidden bg-[#f7f6f2]">
          <Image
            src={
              property.image ||
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            }
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />

          {/* Floating Price Pill */}
          <div className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#18342d] shadow-xs backdrop-blur-sm">
            ৳ {property.price.toLocaleString()}
            <span className="text-[10px] font-normal text-[#64716c]"> / month</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-2.5">
          <h2 className="line-clamp-1 text-base font-semibold text-[#18342d] group-hover:text-[#b77940] transition-colors">
            {property.title}
          </h2>

          <div className="flex items-center gap-1.5 text-xs text-[#64716c]">
            <MapPin className="size-3.5 text-[#b77940] shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          <p className="line-clamp-2 text-xs leading-relaxed text-[#64716c]">
            {property.description}
          </p>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="flex items-center justify-between border-t border-[#e7e5df] px-5 py-3.5 bg-[#fbfaf8]">
        <span className="text-[11px] font-medium text-[#64716c]">
          Listing Active
        </span>

        <div className="flex items-center gap-2">
          <Link
            href={`/landlord-dashboard/update-property/${property.id}`}
            className="inline-flex size-9 items-center justify-center rounded-xl border border-[#e7e5df] bg-white text-[#18342d] shadow-2xs transition hover:border-[#18342d] hover:bg-[#18342d] hover:text-white"
            title="Edit Listing"
          >
            <Pencil className="size-3.5" />
          </Link>

          <DeletePropertyButton propertyId={property.id} />
        </div>
      </div>
    </div>
  );
};

export default LandlordPropertyCard;
