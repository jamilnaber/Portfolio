import React from 'react';

function Bar(props) {
    const bar_width = `${props.value.level}%`
    return(
        <div className="bar">
            <div className="bar__wrapper" style={{
                'width': bar_width
                }}>
                <span className="bar__name">
                    <img src={props.value.icon} alt="icon" className="bar__icon mr-2" />{props.value.name}
                </span>

                </div>

        </div>
    )
}

export default Bar;