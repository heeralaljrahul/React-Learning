// props
import PropTypes from "prop-types"

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Surname: {props.surname}</p>
            <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// prop types
//propTypes are used to make sure that the correct data types are passed as props to a component that is being used.
Student.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  isStudent: PropTypes.bool,
}

// default props
//Default props are used to set default values for the props incase no value is given when the component is being used.
Student.defaultProps = {
  name:"Fairy Tail Member",
  surname:"Unknown",
  isStudent: true,
}

export default Student;