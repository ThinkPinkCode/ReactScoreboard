
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
};

Counter.propTypes = {
    score: React.PropTypes.number.isRequired,
};

function Counter(props){
    return(
        <div className = "counter">
            <button className = "counter-action decrement"> - </button>
            <div className = "counter-score"> {props.score} </div>
            <button className = "counter-action increment"> + </button>
        </div>
    )
};

function Header(props) {
    return (
        <div className= "header">
            <h1>{props.title}</h1>
        </div>
    );
}

function Player(props) {
  return(
    <div className = "player">
              <div className = "player-name">
                {props.name}
              </div>
              <div className = "player-score">
                  <Counter score={props.score}/>
              </div>
          </div>
    
  );
}

function Application(props) {
  return (
    <div className = "scoreboard">
    <Header title ={props.title} />
    
        <div className = "players">
            <Player name = "Melanie Myers" score={31} />
            <Player name="Allison Myers" score={56}/>
            <Player name="Elizabeth Yunker" score={77}/>
        </div>
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string,
};

Application.defaultProps = {
  title: "Scoreboard",
};

ReactDOM.render(<Application />, document.getElementById('container'));