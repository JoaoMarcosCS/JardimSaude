const setStatusColor = (status: string) => {
  let bgColor = "bg-yellow-100";
  let textColor = "text-yellow-500";

  if (status === "Em andamento") {
    bgColor = "bg-yellow-100";
    textColor = "text-yellow-500";

  } else if (status === "Finalizado") {
    bgColor = "bg-green-100"
    textColor = "text-green-500";

  } else if (status === "Cancelado") {
    bgColor = "bg-red-100";
    textColor = "text-red-500";

  }

  return {bgColor, textColor};
}

export default setStatusColor;
