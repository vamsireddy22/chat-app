import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css'

const App = () =>{

    if(!localStorage.getItem('username')) return <LoginForm/>


    return(
        <ChatEngine
            height="100vh"
            projectID="ca545509-8573-4eaf-a438-dcafec633fd2"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            //renderChatFeed = "Hello Vmasi"
            renderChatFeed = {
                (chatAppFeed) =><ChatFeed {
                    ... chatAppFeed
                }
                />
            }
        />
    )
}

export default App;


