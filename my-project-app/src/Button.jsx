function Button() {

    const handleClick = () => {
        console.log("OUch");
    }

    const haha = (e) => {
        console.log(e);
    }
      

    return (<Button onClick={haha(e)}>List of items</Button>);
}

export default Button;