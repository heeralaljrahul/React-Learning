function Food(){
    //inside the return statement, we need to use {} to put javascript code into it
    //outside of the return statement, we do not have to use {} to write javascript code

    const Food1 = "Orange";
    const Food2 = "Grapes";
    return(
        <ul>
            <li>Banana</li>
            <li>{Food1}</li>
            <li>{Food2.toUpperCase()}</li>
        </ul>
    );
}
export default Food;