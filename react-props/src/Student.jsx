// props



function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Surname: {props.surname}</p>
            <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}


export default Student;