


class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			done: false
		}
	}
	onListItemClick() {
		this.setState({
			done: !this.state.done
		})
	}
	render() {
		var style = {
			'font-weight': this.state.done ? 'bold' : 'normal'
    }
		return (
			<li style={style} onClick={this.onListItemClick.bind(this)}> {this.props.grocery} </li>
    )
	}
}

var Grocerys = (props) => (
  <ul>
    {props.groceries.map(grocery => 
    	<GroceryListItem grocery={grocery} />
    )}
  </ul>
 );

var App = () => (
  <div> 
    <div> Grocery List </div>
    <Grocerys groceries={['carrots', 'peas', 'bread']}/>
  </div>
  )

  ReactDOM.render(<App />, document.getElementById("app"));