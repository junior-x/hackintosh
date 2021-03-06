import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './jupiterLoop.json'
import "./../../App.css"

export default class LottieJupiter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };
    }

    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            speed: 0.1,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            },
            
        };

        return <div className='Loading'>
            <Lottie
                options={defaultOptions}
                height={400}
                width={630}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
                style={{ pointerEvents: "none" }}
                hover
            />
        </div>
    }
}
