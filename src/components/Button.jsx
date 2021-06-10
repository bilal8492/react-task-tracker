import propTypes from "prop-types"
export const Button = ({ color, text, onClick }) => {


    return (
        <div>
            <button onClick={onClick} style={{ backgroundColor: color }} className="btn">{text}</button>
        </div>
    )
}
Button.defaultProps = {
    color: 'steelblue'
}
Button.prototype = {
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.string,
}

export default Button