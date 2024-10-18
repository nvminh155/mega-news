export type TUser = {
  id: string;
  avatarUrl?: string;
  bannerUrl?: string;
  firstName: string;
  lastName: string;
  userName: string;
  password?: string;
  email?: string;
  title?: string;
  followerIds?: string[];
  explanationHTML?: string;
};
