export type Comment = {
  id?: number,
  authorId: number,
  postId: number,
  likes?: number, 
  text: string
};