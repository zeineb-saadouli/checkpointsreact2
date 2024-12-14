import React, { Component } from 'react'
import './profistyles.css';
export class Profil extends Component {
       constructor(props){
          super(props);
          this.state={
            person:{
              fullName:"Saadouli Zeineb",
              bio: "ingénieur depuis 7 ans ",
              imgSrc: "https://img.freepik.com/premium-photo/woman-wearing-hijab-white-jacket-looks-out-window_835197-1425.jpg",
              profession: "ingénieur procédés"
      
            },
            montre: false,  
            timer: 0, 
          }
        }
        componentDidMount(){
            this.interval = setInterval(
                () => this.setState({
                    timer:this.state.timer +1
                }),
                1000
              );
        }
        // componentWillUnmount() {
        //     clearInterval(this.interval);
        //   }
      toggle=()=>{
        this.setState({montre:!this.state.montre})
      }  
  render() {
    return (
      <div>
        <button onClick={this.toggle}>
            {
                this.state.montre ? "hide Profil":"show Profil"
            }
        </button>
        {
           this.state.montre &&(
                <div>
                    <h1>{this.state.person.fullName}</h1>
                    <h1>{this.state.person.bio}</h1>
                    <h1>{this.state.person.profession}</h1>
                    <img src={this.state.person.imgSrc} alt={this.state.person.fullName}/>
                </div>
            )   
        }
        <p>le temps écoulé est de {this.state.timer}second </p>
      </div>
    )
  }
}

export default Profil
