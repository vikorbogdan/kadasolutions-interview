interface QuantitySelectorProps {
  handleIncrement: () => void
  handleDecrement: () => void
  value: number
}

const QuantitySelector = ({
  handleIncrement,
  handleDecrement,
  value,
}: QuantitySelectorProps) => {
  return (
    <div className="flex w-16 justify-between bg-white rounded-md p-1">
      <button onClick={handleDecrement}>-</button>
      <div>{value}</div>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default QuantitySelector
