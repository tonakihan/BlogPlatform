export interface IPost {
  id?: number,
  authorId: number,
  status: 'visable' | 'hide',
  likes?: number,
  text: string,
};