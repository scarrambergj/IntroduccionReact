import "./styles.css";
import React from 'react';

const Layout = props => (
    <React.Fragment>
        <header> My Header</header>
        <main>{props.children}</main> 
        <footer>My Footer</footer>
    </React.Fragment>
);


class Add extends React.Component{
    render() {
        return <h1>{this.props.a + this.props.b}</h1>
    }
};

export default function App() {
  return (
      <div>
          <Layout>
              <p>page 1 body content here</p>
            </Layout>  
    
        <Layout>
            <p>page 2</p>
        </Layout>
    </div>
    
    
  )
};
