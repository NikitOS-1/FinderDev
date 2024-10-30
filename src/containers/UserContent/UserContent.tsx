import { ContentStyled } from './styled.ts';
import { useAppSelector } from '../../redux/helpers.ts';
import UserAvatar from '../../components/UserAvatar/UserAvatar.tsx';

export const UserContent = () => {
  const {
    avatar,
    name,
    created,
    login,
    bio,
    public: publicRepos,
    followers,
    following,
    location,
    twitter,
    blog,
    company,
  } = useAppSelector((store) => store.user);

  return (
    <ContentStyled>
      <div>
        <UserAvatar srcImage={avatar} name={name} />
      </div>
      <div>
        <div><strong>Name:</strong> {name}</div>
        <div><strong>Login:</strong> {login}</div>
        <div><strong>Created:</strong> {created}</div>
        <div><strong>Bio:</strong> {bio}</div>
        <div><strong>Public Repos:</strong> {publicRepos}</div>
        <div><strong>Followers:</strong> {followers}</div>
        <div><strong>Following:</strong> {following}</div>
        <div><strong>Location:</strong> {location}</div>
        <div><strong>Twitter:</strong> {twitter}</div>
        <div><strong>Blog:</strong> <a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a></div>
        <div><strong>Company:</strong> {company}</div>
      </div>
    </ContentStyled>
  );
};