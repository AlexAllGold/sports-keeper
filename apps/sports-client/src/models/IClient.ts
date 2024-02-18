export interface IClient {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  clubId: number,
  dateOfBirth: Date,
}
export type CreateClient = Omit<IClient, 'id'>;
