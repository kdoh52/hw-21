import React from 'react'

export default function DeleteBtn(props) {
    return (
        // <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        //     {props.children}
        // </button>
        <button {...props} className="btn btn-success">
            delete
        </button>
    )
}
