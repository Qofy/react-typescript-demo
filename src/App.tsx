import './App.css';
import { Greet} from './component/Greet';
import {Person} from "./component/Person"
import {PersonList} from "./component/PersonList"
import { Status } from './component/Status';
import { Heading } from './component/Heading';
import { Oscar } from './component/Oscar';
import { Button } from './component/Button';
import { Container } from './component/Container';
import { Input } from './component/Input';
import { ThemeContextProvider } from './component/context/ThemeContext';
import { Box } from './component/context/Box';
import { User } from './component/states/User';
import { UserContextProvider } from './component/context/UserContext';
import { Private } from './component/auth/Private';
import { Profile } from './component/auth/Profile';
import { List } from './component/Generic/List';
function App() {
  const personName ={
    firstName: "Bruce",
    lastName: "Wayne"
  }

  const personNames = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clerk",
      last: "Kent"
    },
    {
      first: "Princess",
      last: "Diana"
    }

  ]
  return (
    <div className="App">
      <Greet name ="Safo Kofi" messageCount={20} isLogin = {false}/>
      <Person name ={personName}/>
      <PersonList names = {personNames}/>
      <Status status="loading"/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button handleClick={(event, id) => console.log("Button Clicked",event,id)}/>
        <Input value='' handleOnchange={(event) => console.log(event)}/>
      <Container style={{color : "red", padding : "1rem"}}/>

      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>

      <UserContextProvider>
        <User/>
      </UserContextProvider>
      <Private isLoggedIn= {true} component={Profile}/>

      <List items={[
        {id: 1,first: "Bruce", last: "Wayne"},
        {id: 2,first: "Clerk", last: "Tom"},
        {id: 3,first:"Ellen", last: "Winson"}
      ]} onClick={(item) => console.log(item)}/>
    </div>
  );
}

export default App;
