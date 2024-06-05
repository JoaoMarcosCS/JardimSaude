const setStatusColor = (status: string) => {
  let colorBg = "text-yellow-400";
  if (status === "Em andamento") {
    colorBg = "text-yellow-400";
  } else if (status === "Finalizado") {
    colorBg = "text-green-400"
  } else if (status === "Cancelado") {
    colorBg = "text-red-400";
  }

  return colorBg;
}

export default setStatusColor;
