import React from 'react';

type ButtonPropsType = {
    title: string
    onClickHandler: ()=> void
    isDisabled?: boolean
    classes?: string
}
const Button = (props: ButtonPropsType) => {
    return (
        <button
            className={props.classes}
            disabled={props.isDisabled}
            onClick={props.onClickHandler}>{props.title}</button>
    )
}

export default Button;