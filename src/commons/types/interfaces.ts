export interface UserInterface {
  login: string,
  id: number,
  avatar: string
  name: string
  company: string | null,
  blog: string
  location: string
  bio: string | null,
  twitter: string | null,
  repos: number
  followers: number,
  following: number,
  created: string
}

export interface FetchUserInterface {
  login: string,
  id: number,
  avatar_url: string
  name: string
  company: string | null,
  blog: string
  location: string
  bio: string | null,
  public_repos: string
  twitter_username: string | null,
  followers: number,
  following: number,
  created_at: string
}

export interface FetchErrorInterface {
  message: string;
  documentation_url: string;
  status: string;
}