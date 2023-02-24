import { Component } from "react";
import time from '../assets/relogio.png'
import styles from './Clock.module.css'

export class Clock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            txt: 'Start'
        }
        this.timer = null;
        this.start = this.start.bind(this);
        this.clear = this.clear.bind(this);
    }
    start() {

        let state = this.state

        if (this.timer !== null) {
            clearInterval(this.timer)
            this.timer = null
            this.state.txt = 'Start'
        } else {
            this.timer = setInterval(() => {
                let state = this.state
                state.num += 0.1;
                this.setState(state)
            }, 100);
            state.txt = "Pause";
        }
        this.setState(state)
    }

    clear() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }
        else {
            let state = this.state
            state.num = 0;
            state.txt = "Start"
            this.setState(state)
        }

    }


    render() {
        return (
            <div className={styles.container}>
                <img src={time} />
                <a className={styles.timer}>{Number(this.state.num).toFixed(1)}</a>
                <div className={styles.container_button}>
                    <a className={styles.button} onClick={this.start} >{this.state.txt}</a>
                    <a className={styles.button} onClick={this.clear} >Clear</a>
                </div>
            </div>
        )
    }
}