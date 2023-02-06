import React from "react";

function Radio({ id, name, value, children, ...delegated }) {
    return (
        <label htmlFor={id}>
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                {...delegated}
            />
            {children}
        </label>
    )
}

export default React.memo(Radio);
