import React from 'react'
import { css } from '@emotion/core'

const DotsButtons = ({count, clicked}) => {
    const dots = [count];
    for (let i = 0; i<count ; i++) {
        dots.push(<span css = {css `
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            height: 15px;
            margin: 0 2px;
            width: 15px;
        ` } onClick={clicked}></span>);
    }
    return (
        <div>
            {dots.map( ele => ele)}
        </div>
    );
};

export default DotsButtons;