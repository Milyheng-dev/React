// import style from './Button.module.css';

function Button () {

    const styles = {
        height: "40px",
        width: "100px",
        textAlign: "center",
        fontSize: "20px",
        color: "rgb(74, 86, 213)",
        borderRadius: "10px",
        backgroundColor: "rgb(243, 52, 52)",
        cursor: "pointer"
    }
    return (
        <button style={styles}>
            Click me
        </button>
    );
}

export default Button