import React,{Component} from 'react';
// import logo from './logo.svg';
import  Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: 'c0d5657caccc4613bf08bb98ed76a58b'
 });


const particleProps = 
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
}
class App extends Component{
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{},
      route:'signin',
      isSignedin:false
    }
}

  componentDidMount(){
    fetch('http://localhost:300/')
    .then(response=>response.json())
    .then(console.log)
  }



  calculateFacePosition = (data)=>{
    const clarifaiData=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputImage');
    const width=image.width;
    const height=image.height;
    console.log(width,height);
    return{
      leftCol: clarifaiData.left_col*width,
      topRow: clarifaiData.top_row*height,
      rightCol: width -(clarifaiData.right_col*width),
      bottomRow: height-(clarifaiData.bottom_row*height)
    }
  }

  displayFaceBoxHandler = (box)=>{
    this.setState({box:box});
    // this.setState({box}) ANOTHER METHOD
    console.log(box);
  }

  onInputChangeHandler=(event)=>{
    this.setState({input:event.target.value})
  }
  onSubmitHandler=()=>{
    this.setState({imageUrl:this.state.input});
    console.log('click');
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response=>{
      this.displayFaceBoxHandler(this.calculateFacePosition(response))
      console.log(response);
    })
    .catch(err=>console.log(err));
  }


  onrouteChangeHandler=(route)=>{
    if(route==='signin'){
      this.setState({isSignedin:false})
    }
    else if(route==='home'){
      this.setState({isSignedin:true})
    }
    this.setState({route:route});
  }



  render(){
     return (
        <div className="App">
        <Particles className="Particle" params={particleProps} />
        <Navigation isSignedin={this.state.isSignedin} signoutHandler={this.onrouteChangeHandler} />
        { this.state.route==='home'?
          <div>
            <Logo/>
            <Rank/>
            <ImageLinkForm  onInputChange={this.onInputChangeHandler}
                            Submit={this.onSubmitHandler}
            />
            <FaceRecognition box ={this.state.box} ImageUrl={this.state.imageUrl}/>
          </div>:
          ( this.state.route==='signin'?
            <SignIn onRouteChange={this.onrouteChangeHandler}/>:
            <SignUp onRouteChange={this.onrouteChangeHandler}/>
          )
        }
        </div>
      );
  }
 
}

export default App;
