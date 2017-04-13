
// 1
// var GrocerList() => (
//   <ul> 
//     <li> eggs </li>
//     <li> peas </li>
//   </ul>
// )
// ReactDOM.render(<GrocerList />, document.getElementById("app"));



// 2)
// var Cucumbers = () => (
// 	<li> Cucumbers </li>
// )

// var Kale = () => (
//   <li> Kale </li>
// )

// var GrocerList = () => (
//    <ul> 
//      <Kale />
//      <Cucumbers />
//    </ul>
// )

//  ReactDOM.render(<GrocerList />, document.getElementById("app"));

// 3
// var GroceryListItem = (props) => (
// 	<ul>
//     <li> {props.groceries[0]} </li>
//     <li> {props.groceries[1]} </li>
//     <li> {props.groceries[2]} </li>
// 	</ul>
// )


// var App = () => (
//   <div> 
//     <h2> My Grocery List </h2>
//     <GroceryListItem groceries={['peas', 'carrots', 'bread']}/>
//   </div>
// )

// ReactDOM.render(<App />, document.getElementById("app"));

// 4)


// class GroceryListItem extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		return (
// 			<li> {this.props.grocery} </li>
//     )
// 	}
// }

// var Grocerys = (props) => (
//   <ul>
//     {props.groceries.map(grocery => 
//     	<GroceryListItem grocery={grocery} />
//     )}
//   </ul>
//  );

// var App = () => (
//   <div> 
//     <div> Grocery List </div>
//     <Grocerys groceries={['carrots', 'peas', 'bread']}/>
//   </div>
//   )

// ReactDOM.render(<Ap


// class GroceryListItem extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			done: false
// 		}
// 	}
// 	onListItemClick() {
// 		this.setState({
// 			done: !this.state.done
// 		})
// 	}
// 	render() {
// 		var style = {
// 			'font-weight': this.state.done ? 'bold' : 'normal'
//     }
// 		return (
// 			<li style={style} onClick={this.onListItemClick.bind(this)}> {this.props.grocery} </li>
//     )
// 	}
// }

// var Grocerys = (props) => (
//   <ul>
//     {props.groceries.map(grocery => 
//     	<GroceryListItem grocery={grocery} />
//     )}
//   </ul>
//  );

// var App = () => (
//   <div> 
//     <div> Grocery List </div>
//     <Grocerys groceries={['carrots', 'peas', 'bread']}/>
//   </div>
//   )

//   ReactDOM.render(<App />, document.getElementById("app"));


