```js
import { Message } from './Message';
import { MessageSimple } from './MessageSimple';

const data = require('../../docs/data');

const readBy = [
  {
    created_at: '2019-01-22T16:35:18.417456Z',
    id: 'thierry',
    online: true,
    role: 'user',
    updated_at: '2019-01-25T18:07:04.20131Z',
  },
];
<div className="str-chat" style={{ height: 'unset' }}>
  <Message
    message={data.message}
    Message={MessageSimple}
    readBy={readBy}
    groupStyles={['bottom']}
    editing={false}
    mutes={[]}
    {...data.channelContext}
    {...data.translationContext}
  />
</div>;
```