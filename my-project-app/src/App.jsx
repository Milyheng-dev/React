import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import InteractButton from "./InteractButton.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import Payment from "./Payment.jsx";
function App() {
  //   const fruits = [{id: 1, name: "Apple", calories: 95},
  //                     {id: 2, name: "Orange", calories: 45},
  //                     {id: 3, name: "banana", calories: 105},
  //                     {id: 4, name: "coconut", calories: 159},
  //                     {id: 5, name: "pineapple", calories: 37}];

  //   const vegetables = [{id: 1, name: "Apple", calories: 95},
  //                     {id: 2, name: "Orange", calories: 45},
  //                     {id: 3, name: "banana", calories: 105},
  //                     {id: 4, name: "coconut", calories: 159},
  //                     {id: 5, name: "pineapple", calories: 37}];

  return (
    <>
      {/* <UserGreeting isLoggedIn={false} username="Milyheng" />
      <UserGreeting isLoggedIn= {true} /> */}
      {/* <List items={vegetables} category="Vegetables"/>
      <List items={fruits} category="Fruits"/> */}
      {/* <Payment /> */}
      <ProfilePicture />
    </>
  );
}

export default App;
