import { ContentStyled } from './styled.ts';
import { useAppSelector } from '../../redux/helpers.ts';
import UserAvatar from '../../components/UserAvatar/UserAvatar.tsx';
//@ts-ignore
import LocationIcon from '../../assets/location_icon.svg?react';
//@ts-ignore
import ApartmentIcon from '../../assets/apartment_icon.svg?react';
//@ts-ignore
import ShareIcon from '../../assets/share_icon.svg?react';
//@ts-ignore
import LanguageIcon from '../../assets/language_icon.svg?react';

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
  const theme = useAppSelector((store) => store.theme.mainTheme);

  const date = new Date(created);
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);

  return (
    <ContentStyled theme={theme}>
      <div className="left_content">
        <UserAvatar srcImage={avatar} name={name} className={'avatar'} />
        <div className="content_user_login">@{login}</div>
      </div>
      <div className="right_content">
        <div className="content_user_info">
          <p>{name}</p>
          <span>Joined {formattedDate}</span>
        </div>
        <div className="content_user_bio">{bio}</div>
        <div className="content_user_activity">
          <div>Repos <p>{publicRepos}</p></div>
          <div>Followers <p>{followers}</p></div>
          <div>Following <p>{following}</p></div>
        </div>
        <div className="content_user_about">
          <div className="content_block_left">
            <div>
              <span><LocationIcon /></span>
              <p>{location || 'No info'}</p>
            </div>
            <div>
              <span><LanguageIcon /></span>
              <p>{blog || 'No info'}</p>
            </div>
          </div>

          <div className="content_block_right">
            <div>
              <span><ShareIcon /></span>
              <p>{twitter || 'No info'}</p>
            </div>
            <div>
              <span><ApartmentIcon /></span>
              <p>{company || 'No info'}</p>
            </div>
          </div>
        </div>
      </div>
    </ContentStyled>
  );
};