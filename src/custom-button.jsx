
function CustomButton({ handleClick , content, isHidden }) {
    return (
        (!isHidden)
        ? (<button onClick={handleClick}>
            {content}
        </button>)
        : (null)
    );
}

export default CustomButton;