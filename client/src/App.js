import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      title: 'Sarah Cox-Barkley',
      headerLinks: [
        {title:'Home',path: '/'},
        {title:'About',path: '/about'},
        {title:'Projects',path: '/projects'},
        {title:'Contact',path: '/contact'},
      ],
      home: {
        title: 'Hi! I\'m Sarah.',
        subTitle: 'Projects',
        text: 'Take a look at my projects'
      },
      about: {
        title: 'About Me',
        
      },
      home: {
        title: 'Let\'s Connect!',

      },
      
    }
  }
  render() {
    return (
      <div>Hello</div>
    );
  }
}

export default App;
