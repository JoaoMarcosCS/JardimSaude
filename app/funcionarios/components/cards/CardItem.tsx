interface CardItemProps {
  label: string,
  value: string | number,
}

const CardItem = ({ label, value }: CardItemProps) => {
  return (
    <div className="flex w-full justify-between px-2 items-center">
      <h2>{label}: </h2>
      <h1>{value}</h1>
    </div>
  )
}

export default CardItem;
