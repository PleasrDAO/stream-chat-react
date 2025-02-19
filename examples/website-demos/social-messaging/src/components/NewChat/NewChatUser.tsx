import Dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Avatar } from 'stream-chat-react';
import { UserResponse } from 'stream-chat';

import { SocialUserType } from '../ChatContainer/ChatContainer';

import './NewChatUser.scss';

type Props<SocialUserType> = {
  user: UserResponse<SocialUserType> | undefined;
};

export const NewChatUser = (props: Props<SocialUserType>) => {
  const { user } = props;

  if (!user) return null;

  Dayjs.extend(relativeTime);
  let status = Dayjs().from(Dayjs(user.last_active), true);

  return (
    <div className='new-chat-user'>
      <Avatar image={user.image || ''} name={user.name || user.id} size={56} />
      <div className='new-chat-user-contents'>
        <div className='new-chat-user-contents-name'>
          <span>{user.name || user.id}</span>
        </div>
        <div className='new-chat-user-contents-status'>
          {user.last_active ? <span>Last online {status} ago</span> : <span>Not online</span>}
        </div>
      </div>
    </div>
  );
};
