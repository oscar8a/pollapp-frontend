import React from 'react';
import Plot from 'react-plotly.js';
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';

class PollResults extends React.Component{

  state = {
    loading: true,
    op1: {},
    op2: {}
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = () => {
    const ID = this.props.match.params.id

    fetch(`http://localhost:3000/polls/${ID}`)
    .then(res => res.json())
    .then(data => {
    console.group(data)
    const attributes = data.data.attributes

    const option1 = attributes.vote_options[0]
    const option2 = attributes.vote_options[1]

    option1["votes"] = data.data.attributes.votes.filter(
      vote => option1.id === vote.vote_option_id )

    option2["votes"] = data.data.attributes.votes.filter(vote => option2.id === vote.vote_option_id)

    this.setState({
      loading: false,
      pollName: attributes.poll_name,
      op1: option1,
      op2: option2
    })
  })
}

  render(){

    console.log(this.state)

      return (
        this.state.loading?
        <ReactLoading type={'balls'} color={'blue'} height={'20%'} width={'20%'} />
        :
        <Plot
          data={
            [{
              type: 'bar',
              x: [this.state.op1.option_name, this.state.op2.option_name], 
              y: [this.state.op1.votes.length, this.state.op2.votes.length]
            }]
          }
          layout={
            {
              width: 500, 
              height: 500, 
              title: this.state.pollName
            }
          }
        />
      );
    }
}
export default withRouter(PollResults)

// plotLayout(){
//   return {width: 320, height: 240, title: 'A Fancy Plot'}
      // const layout = {
      //   title: 'Global Emissions 1990-2011',
      //   grid: {rows: 1, columns: 2},
      //   showlegend: false,
      //   annotations: [
      //     {
      //       font: {
      //         size: 14
      //       },
      //       showarrow: false,
      //       text: 'GHG',
      //       x: 0.17,
      //       y: 0.5
      //     },
      //     {
      //       font: {
      //         size: 14
      //       },
      //       showarrow: false,
      //       text: 'CO2',
      //       x: 0.82,
      //       y: 0.5
      //     }
      //   ]
      // };
      // return layout
    // }



    // plotData(){
    //   return [
    //     {
    //       x: [1, 2, 3],
    //       y: [2, 6, 3],
    //       type: 'scatter',
    //       mode: 'lines+points',
    //       marker: {color: 'red'},
    //     },
    //     {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
    //   ]
    //   const data = [{
    //     values: [16, 15, 12, 6, 5, 4, 42],
    //     labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
    //     domain: {column: 0},
    //     name: 'GHG Emissions',
    //     hoverinfo: 'label+percent+name',
    //     hole: .4,
    //     type: 'pie'
    //   },{
    //     values: [27, 11, 25, 8, 1, 3, 25],
    //     labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
    //     text: 'CO2',
    //     textposition: 'inside',
    //     domain: {column: 1},
    //     name: 'CO2 Emissions',
    //     hoverinfo: 'label+percent+name',
    //     hole: .4,
    //     type: 'pie'
    //   }];
    //   return data
    // }