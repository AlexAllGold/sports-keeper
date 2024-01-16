export interface IClub {
  id?: number,
  name: string,
  address: string,
  description: string
}
export type CreateClub = Omit<IClub, 'id'>;


