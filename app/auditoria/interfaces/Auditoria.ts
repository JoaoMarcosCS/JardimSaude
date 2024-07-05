interface Auditoria {
  id: number,
  tipoOperacao: TipoOperacao,
  valor_transacao?: number,
  data: Date,
  quantidade?: number
}
