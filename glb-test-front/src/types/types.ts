type User = {
  id: number;
  displayName: string;
  email: string;
};
type GLBFile = {
  id: number;
  name: string;
  size: number;
  key: string;
  url: string;
  userId: number;
  published: string;
  updated: string;
  user: User;
};
