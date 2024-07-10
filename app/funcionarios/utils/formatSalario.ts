export const formatSalary = (valor:string) => {
  return `${valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
};
