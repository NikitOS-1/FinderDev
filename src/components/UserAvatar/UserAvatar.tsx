import Avatar from 'react-avatar';
import { AVATAR_SIZES } from '../../commons/constants/constants.ts';

interface UserAvatarProps {
  name?: string;
  srcImage: string | null;
  size?: string;
  round?: boolean;
  className?: string;
}

const UserAvatar = ({
                      name = '',
                      size = AVATAR_SIZES.EXTRA_LARGE,
                      round = true,
                      srcImage = null,
                      className,
                    }: UserAvatarProps) => (
  <Avatar
    name={name}
    size={size}
    round={round}
    src={srcImage ?? ''}
    alt={name}
    className={className}
  />
);

export default UserAvatar;
