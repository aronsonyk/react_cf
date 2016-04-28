import React from "react"

import SearchBar from "./SearchBar.jsx"
import ProductTable from "./ProductTable.jsx"

export default class FilterableProductTable extends React.Component {
  
  constructor() {
    super();
    this.state = {
      filter: null   
    }
  }

  filterData(ev) {
    var search = ev.target.value
    setTimeout(() => {
      this.setState({filter: search})
    }, 2000)
  }

  render() {
    return (
      <div>
        <SearchBar onChange={this.filterData.bind(this)}/>
        <ProductTable products={this.props.data} filter={this.state.filter}/>
      </div>
    )
  }

}