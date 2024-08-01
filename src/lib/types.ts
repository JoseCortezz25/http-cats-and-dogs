export interface Status {
  id: number;
  status: number;
  name: string;
  description: string;
  images: {
    cat: string;
    dog: string;
  };
}