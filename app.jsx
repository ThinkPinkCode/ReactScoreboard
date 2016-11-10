function Header(props) {
 return (
   <div className= "header">
     <h1>{props.title}</h1>
   </div>
 );
   
  
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  
  
};

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
};

function Player(props) {
  return(
    <div className = "player">
              <div className = "player-name">
                {props.name}
              </div>
    
              <div className = "player-score">
    
                  <div className = "counter">
                      <button className = "counter-action decrement"> - </button>
                      <div className = "counter-score"> {props.score} </div>
                      <button className = "counter-action increment"> + </button>
                   </div>
              </div>
          </div>
    
  );
}



function Application(props) {
  return (
    <div className = "scoreboard">
    <Header title ={props.title} />
    
        <div className = "players">
          <div className = "player">
              <div className = "player-name">
                Melanie Myers
              </div>
    
              <div className = "player-score">
    
                  <div className = "counter">
                      <button className = "counter-action decrement"> - </button>
                      <div className = "counter-score"> 31 </div>
                      <button className = "counter-action increment"> + </button>
                   </div>
              </div>
          </div>
    
    
    <div className = "player">
              <div className = "player-name">
                Allison Myers
              </div>
    
              <div className = "player-score">
    
                  <div className = "counter">
                      <button className = "counter-action decrement"> - </button>
                      <div className = "counter-score"> 56 </div>
                      <button className = "counter-action increment"> + </button>
                   </div>
              </div>
          </div>
    
    
    
    <div className = "player">
              <div className = "player-name">
                Elizabeth Yunker
              </div>
    
              <div className = "player-score">
    
                  <div className = "counter">
                      <button className = "counter-action decrement"> - </button>
                      <div className = "counter-score"> 77 </div>
                      <button className = "counter-action increment"> + </button>
                   </div>
              </div>
          </div>
        </div>
    
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string,
  
  
};

Application.defaultProps = {
  title: "Scoreboard",
}

ReactDOM.render(<Application />, document.getElementById('container'));