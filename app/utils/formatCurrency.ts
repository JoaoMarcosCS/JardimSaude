const formatCurrency = (valor: number) => {
  const valorFormatado = Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: 'BRL'
  }).format(Number(valor))

  return valorFormatado
}

export default formatCurrency;


