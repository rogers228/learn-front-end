// class Greetings extends React.Component
// {
//   render()
//   {
//     return (
//       <h1>Greetings, {this.props.name}!</h1>
//     );
//   }
// }

// ReactDOM.render(
//   <Greetings name="Chris" />,
//   document.getElementById('root')
// );

var main = function(){
	console.log('main');
}();

function Hello() {
	return <h1>Hello World 2!</h1>;
}

ReactDOM.render(<Hello />, document.getElementById('mydiv'))