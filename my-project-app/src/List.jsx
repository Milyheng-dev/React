function List(props) {

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(b.name)); //REVERSE ALPHSBETICAL 
    //fruits.sort((a, b) => a.calories - b.calories); //NUMBERIC ORDER
    //fruits.sort((a, b) => b.calories - a.calories); //REVERSE NUMBERIC ORDER

    const category = props.category;

    const itemList = props.items;   

    const listItems = itemList.map(itemList => <li key={itemList.name}>{itemList.name}: &nbsp;
                                                               <b>{itemList.calories}</b> </li>);

    return (
            <>
                <h3>{category}</h3 >
                <ol>{listItems}</ol>
            </>)

}

export default List