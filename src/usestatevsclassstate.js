import React, { useState, useEffect } from 'react';

export function Comp1() {
    const [a, setA] = useState(0);

    useEffect(() => {
        console.log("comp1 rendered");
    });

    return(
        <div>
            {a}

            <button onClick={() => {setA(10)}}>
                set a to 10
            </button>
            <button onClick={() => {setA(10)}}>
                again set a to 10
            </button>
        </div>
    );
}

export class Comp2 extends React.Component {
    constructor() {
        super();
        this.state = {
            b: 0
        }
    }

    componentDidMount() {
        console.log("Comp2 Mounted");
        
    }

    componentDidUpdate() {
        console.log("Comp2 re-rendered or updtaed");
    }

    render() {
        return(
            <div>
                {this.state.b}
                <button onClick={() => {this.setState({b:10})}}>
                    set b to 10
                </button>
                <button onClick={() => {this.setState({b:10})}}>
                    again set b to 10
                </button>

            </div>
        )
    }
}