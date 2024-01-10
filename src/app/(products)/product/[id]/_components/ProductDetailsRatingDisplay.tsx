import RatingStars from "@/components/RatingStars";

interface ProductDetailsRatingDisplayProps {
  rating: number;
}

const ProductDetailsRatingDisplay = ({
  rating,
}: ProductDetailsRatingDisplayProps) => {
  return (
    <div className="md:ml-auto flex items-center gap-2">
      <div className="flex items-center ">
        <RatingStars rating={Math.floor(rating)} />
      </div>
      <div className="font-semibold text-2xl">{rating}</div>
    </div>
  );
};

export default ProductDetailsRatingDisplay;
