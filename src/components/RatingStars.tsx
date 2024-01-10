import { Star } from "lucide-react"
interface RatingStarsProps {
  rating: number
}
const RatingStars = ({ rating }: RatingStarsProps) => {
  const filledStars = Array.from(Array(rating), (_, idx) => (
    <Star key={idx} className="fill-primary text-primary" />
  ))
  const emptyStars = Array.from(Array(5 - rating), (_, idx) => (
    <Star key={idx} className="fill-gray-300 text-gray-300" />
  ))

  return (
    <>
      {filledStars}
      {emptyStars}
    </>
  )
}

export default RatingStars
