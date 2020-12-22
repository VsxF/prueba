import React from 'react'
import Green from '../media/green.png'
import Red from '../media/red.png'
import Yellow from '../media/yellow.png'
import Blue from '../media/blue.png'
import Black from '../media/black.png'

export default class button extends React.Component {

    constructor(props){
        super(props)

        this.Click = this.Click.bind(this)

        this.state = {
            img: this.props.image
        }
    }

    render() {
        return(
            <div>
                <input type="image" src={this.state.img} onClick={this.Click} id={this.props.id}></input>
            </div>
        )
    }

    Click() {
        this.setColor()
        if(!this.props.show) {
            switch (this.props.image) {
                case Green:
                    this.props.act(0)
                    break;
                case Yellow:
                    this.props.act(2)
                    break;
                case Blue:
                    this.props.act(3)
                    break;
                case Red:
                    this.props.act(1)
                    break;
                default:
                    break;
            }
            
        }        
    }

    //Cambia el color del cuadro
    setColor() {
        //this.setState({ img: Black })
        this.setState({ img: this.props.on})
        setTimeout(function() {
            this.setState({ img: this.props.image })
        }.bind(this), 750);
    }

    
}
