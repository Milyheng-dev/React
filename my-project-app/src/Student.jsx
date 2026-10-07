import PropTypes from "prop-types";
//props use to pass data from parent component to child component
function Student(props) {
  return (
    <div className="student-info">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
//props type is used to validate the props passed to the component. It helps to catch bugs and ensure that the component is used correctly.
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

//passing default props to the component. If the parent component does not provide a value for a prop, the default value will be used instead.
Student.defaultProps = {
  name: "Guest",
  age: 10,
  isStudent: true,
};

export default Student;
