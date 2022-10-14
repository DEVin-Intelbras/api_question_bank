export interface BodyCreateStudent {
  name: string
  cpf: string
}

export interface Student extends BodyCreateStudent {
  id: string
}