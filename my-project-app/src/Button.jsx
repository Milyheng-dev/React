function Button() {

    const handleClick = () => {
        console.log("OUch");
    }
      

    return (<Button onClick={handleClick}>List of items</Button>);
}

export default Button;