function InputBox(props) {
    return (
        <div>
            <input className={props.className}
                type={props.type} 
                id={props.htmlFor} 
                name={props.htmlFor} 
                placeholder={props.placeholder} 
                onChange={props.onChange}
            />
        </div>
    );
}

export default InputBox;