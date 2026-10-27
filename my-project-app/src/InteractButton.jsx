function InteractButton() {
  let count = 0;

  const handleClick = () => {
    if (count < 3) {
      count++;
      console.log(`Button clicked ${count} times`);
    } else {
      console.log("Stop clicking me!");
    }
    //     document.getElementsByClassName("btn")[0].innerHTML = "Fuck you";
  };

  return (
    <button className="btn" onClick={handleClick}>
      Click Me!
    </button>
  );
}

export default InteractButton;
