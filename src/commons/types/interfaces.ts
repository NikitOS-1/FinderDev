export interface ISearchParameters {
  userName: string;
}

export interface IUserProfile {
  id: number,
  avatar: string;
  name: string;
  created: string;
  login: string;
  bio: string | null;
  public: number | null;
  followers: number | null;
  following: number | null;
  location: string | null;
  twitter: string | null;
  blog: string | null;
  company: string | null;
}

export interface IUserDataResponse {
  id: number,
  avatar_url: string;
  name: string;
  created_at: string;
  login: string;
  bio: string | null;
  public_repos: number | null;
  followers: number | null;
  following: number | null;
  location: string | null;
  twitter_username: string | null;
  blog: string | null;
  company: string | null;
}

export interface IFetchError {
  message: string;
  documentation_url: string;
  status: string;
}