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
