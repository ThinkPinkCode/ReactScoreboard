var PLAYERS = [
    {
        name: "Melanie Myers",
        score: 31,
        id: 1,
    },

    {
        name: "Allison Myers",
        score: 51,
        id: 2,
    },

    {
        name: "Elizabeth Yunker",
        score: 61,
        id: 3,
    },
];


Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
};


Application.propTypes = {
    title: React.PropTypes.string,
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired}
    )).isRequired,
};

Application.defaultProps = {
    title: "Scoreboard",
};

var Counter = React.createClass({
    render: function () {
        return(
            <div className = "counter">
                <button className = "counter-action decrement"> - </button>
                <div className = "counter-score"> {this.props.score} </div>
                <button className = "counter-action increment"> + </button>
            </div>
        );
    }
});

Counter.propTypes = {
    score: React.PropTypes.number.isRequired,
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
            {props.players.map(function (player) {
                return <Player name={player.name} score ={player.score} key={player.id}/>
            })}
        </div>
    </div>
  );
}



ReactDOM.render(<Application players = {PLAYERS}/>, document.getElementById('container'));