export function setProfissaoByNivel(nivel: number) {
  let profissao = "Nenhuma";
  if(nivel == 1){
    profissao = "Secretária(o)";
  }else if(nivel == 2){
    profissao = "Médico(a)";
  }

  return profissao;
}
