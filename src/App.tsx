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
    </div>
  );
}

export default App;
