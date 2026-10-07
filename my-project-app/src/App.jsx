import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx"
function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} username="Milyheng" />
      <UserGreeting isLoggedIn= {true} />
      <List />
    </>
  );
}

export default App;
