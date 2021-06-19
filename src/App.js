import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';

const projectID = '370f8736-e4ac-4b5d-ba1d-5b8a24bb53bb';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
        ).play()
      }
    />
  );
};

export default App;
