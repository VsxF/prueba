import React from 'react'
import Button from './button'
import Green from '../media/green.png'
import GreenOn from '../media/green_on.png'
import Red from '../media/red.png'
import RedOn from '../media/red_on.png'
import Yellow from '../media/yellow.png'
import YellowOn from '../media/yellow_on.png'
import Blue from '../media/blue.png'
import BlueOn from '../media/blue_on.png'
import Vline from '../media/v_line.png'
import Hline from '../media/h_line.png'

let sequence = []
let count = 0
let handeler = 0

export default class task2 extends React.Component {

    constructor(props) {
        super(props)
        this.show = this.show.bind(this)
        this.handler = this.handler.bind(this)
        this.state = {
            actual: 0,
            count: 0
        }
    }

    render() {
        return (
            <div>
                <div Style=" position: relative; display: block;">
                    <input type="button" value="Start !" onClick={this.show}></input>
                    <div>{this.state.aux}</div>
                </div>
                <br></br>
                <br></br>

                <div Style=" position: relative; display: inline-block;">
                    <Button image={Green} on={GreenOn} act={this.handler} id="0"
                        show={this.state.show} />
                </div>

                <input type="image" src={Vline}></input>
                <div Style=" position: relative; display: inline-block;">
                    <Button image={Red} on={RedOn} act={this.handler} id="1"
                        show={this.state.show} />
                </div>

                <div Style=" position: relative; display: block;">
                    <input type="image" src={Hline}></input>
                </div>

                <div Style=" position: relative; display: inline-block;">
                    <Button image={Yellow} on={YellowOn} act={this.handler} id="2"
                        show={this.state.show} />
                </div>

                <input type="image" src={Vline}></input>
                <div Style=" position: relative; display: inline-block;">
                    <Button image={Blue} on={BlueOn} act={this.handler} id="3"
                        show={this.state.show} />
                </div>
            </div>
        )
    }

    //Muestra el patron de colores
    async show() {
        this.setState({ show: true })
        sequence.push(this.getNext())

        for (let i = 0; i < sequence.length; i++) {
            const item = sequence[i];
            await this.wait()
            document.getElementById(item).click()

        }
        await this.setState({ show: false })
    }

    //espera entre cada color
    async wait() {
        return new Promise(resolve => {
            setTimeout(resolve, 2000);
        });
    }

    //Detecta las pulsaciones
    handler(actualColor) {
        let a = sequence.length
        let contador = this.state.count
        if (this.state.count !== sequence.length) {

            handeler++
            if (actualColor !== sequence[this.state.count]) {
                alert('Perdiste')
            } else {
                this.state.count++
                contador = this.state.count
            }
            if (this.state.count === sequence.length) {
                this.state.count = 0
                contador = this.state.count
                this.show()
                return null
            } else {
                handeler = 0
            }
        } else {
            handeler = 0
        }
    }

    //Obtiene el siguiente color
    getNext() {
        return Math.floor(Math.random() * 4);
    }
}
