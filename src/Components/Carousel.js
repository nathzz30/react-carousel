import React, { Component } from 'react'
import Picture from './Pictures'
import { css } from "emotion";



class Carousel extends Component {
    state = {
        active: null,
        imageCounter: null
    }

    render(){
        const style = css`background-color: red;
            width: 500px;
            height: 1000px;
            border: 1px solid green ;`    
        ;
        return (
            <div className={style}
            > 
            <Picture />
            </div>
        );
    };
}

export default Carousel;