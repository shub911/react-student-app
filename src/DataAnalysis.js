import React from 'react';
import './index.css';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { styled } from '@material-ui/styles';

const CustomList = styled(List)({
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto' 
})
const CustomListItem = styled(ListItem)({
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '11px',
    marginBottom: '11px'
})

export default class DataAnalysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            count: 0,
            max: 0,
            min: 0,
            average: 0,
        };
      }

    componentDidMount() {
        window.addEventListener('load', this.findMax);
        window.addEventListener('load', this.findMin);
        window.addEventListener('load', this.findAvg);
        window.addEventListener('load', this.findCount);
        console.log(this.state.data);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
          this.findMax();
          this.findMin();
          this.findAvg();
          this.findCount();
        } 
      }
    findCount = () => {
        this.setState({count: this.props.data.length})
    }
    findMax = () => {
        let data = this.props.data;
        let scores = data.slice(0);
        let max =  Math.max.apply(Math, scores.map(function(n) { return n.score; }));
        this.setState({ max })
    }
    findMin = () => {
        let data = this.props.data;
        let scores = data.slice(0);
        let min =  Math.min.apply(Math, scores.map(function(n) { return n.score; }));
        this.setState({ min })
    }
    findAvg = () => {
        let arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
        let data = this.props.data;
        let scores = data.map(a => a.score);
        let average =  arrAvg(scores);
        let avg = average.toFixed(2);
        this.setState({ average: avg })
    }

  render() {
      let {count, max, min, average} = this.state;
    return (
        <React.Fragment>
            <CustomList>
                <CustomListItem>
                    <ListItemText primary={count} secondary="Count" />
                    <ListItemText primary={max} secondary="Max" />
                    <ListItemText primary={min} secondary="Min" />
                    <ListItemText primary={average} secondary="Average" />
                </CustomListItem>
            </CustomList>
        </React.Fragment>
    );
  }
}