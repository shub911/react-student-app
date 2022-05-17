import React from 'react';
import { BarChart, XAxis, YAxis, Legend, Bar, Tooltip } from 'recharts';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: [],
      grades: []
    };
  }
    componentDidMount() {
        window.addEventListener('load', this.findFrequency);
        console.log(this.props.data);
    }
    componentDidUpdate(prevProps) {
      if (prevProps.data !== this.props.data) {
        this.findFrequency();
      } 
    }

    findFrequency = () => {
      let frequency = [];
      let grades = [];
      let scores = this.props.data;
      let data = scores.map(({score}) => score);
      let f10 = 0;
      let f20 = 0;
      let f30 = 0;
      let f40 = 0;
      let f50 = 0;
      let f60 = 0;
      let f70 = 0;
      let f80 = 0;
      let f90 = 0;
      let f100 = 0;
      let numF = 0;
      let numD = 0;
      let numC = 0;
      let numB = 0;
      let numA = 0;
      for(let i = 0; i < data.length; ++i){
        if(data[i] <= 10 & data[i] >= 0){
          f10 += 1;
          numF += 1;
        }
        else if(data[i] <= 20 & data[i] >= 11) {
          f20 = f20 + 1;
          numF += 1;
        }
        else if(data[i] <= 30 & data[i] >= 21) {
          f30 = f30 + 1;
          numF += 1;
        }
        else if(data[i] <= 40 & data[i] >= 31) {
          f40 = f40 + 1;
          numF += 1;
        }
        else if(data[i] <= 50 & data[i] >= 41) {
          f50 = f50 + 1;
          numF += 1;
        }
        else if(data[i] <= 60 & data[i] >= 51) {
          f60 = f60 + 1;
          numF += 1;
        }
        else if(data[i] <= 70 & data[i] >= 61) {
          f70 = f70 + 1;
          numD += 1;
        }
        else if(data[i] <= 80 & data[i] >= 71) {
          f80 = f80 + 1;
          numC += 1;
        }
        else if(data[i] <= 90 & data[i] >= 81) {
          f90 = f90 + 1;
          numB += 1;
        }
        else if(data[i] <= 100 & data[i] >= 91) {
          f100 ++;
          numA += 1;
        } else {
          return null
        }
      }
      let f0 = {range: "0-10", frequency: f10};
      let f1 = {range: "11-20", frequency: f20};
      let f2 = {range: "21-30", frequency: f30};
      let f3 = {range: "31-40", frequency: f40};
      let f4 = {range: "41-50", frequency: f50};
      let f5 = {range: "51-60", frequency: f60};
      let f6 = {range: "61-70", frequency: f70};
      let f7 = {range: "71-80", frequency: f80};
      let f8 = {range: "81-90", frequency: f90};
      let f9 = {range: "91-100", frequency: f100};
      let totalA = {grade: "A", total: numA};
      let totalB = {grade: "B", total: numB};
      let totalC = {grade: "C", total: numC};
      let totalD = {grade: "D", total: numD};
      let totalF = {grade: "F", total: numF};
      frequency.push(f0, f1, f2, f3, f4, f5, f6, f7, f8, f9);
      grades.push(totalA, totalB, totalC, totalD, totalF)
      this.setState({ frequency: frequency, grades: grades });
    };

  render() {
    console.log(this.state.frequency)
    return (
      <React.Fragment>
        <h2>Score Frequency Distribution</h2>
        <BarChart title="Score Frequency Distribution" data={this.state.frequency} width={475} height={181} margin={{ top: 15, right: 20 }}>
          <XAxis dataKey="range"/>
          <YAxis allowDecimals={false}/>
          <Legend />
          <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }}/>
          <Bar dataKey="frequency" fill="#0C9C84" />
        </BarChart>
        <h2>Grade Frequency Distribution</h2>
        <BarChart title="Grade Frequency Distribution" data={this.state.grades} width={475} height={180} margin={{ top: 15, right: 20 }}>
          <XAxis dataKey="grade"/>
          <YAxis allowDecimals={false}/>
          <Legend />
          <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }}/>
          <Bar dataKey="total" fill="#0C9C84" />
        </BarChart>
      </React.Fragment>
    );
  }
}