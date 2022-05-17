import React from "react";
import Graph from './Graph';
import DataAnalysis from './DataAnalysis';
import MaterialTable from 'material-table';
import './index.css';
import { Grid, Paper, Fab } from '@material-ui/core';
import NumericInput from 'react-numeric-input';
import { LayersClear, PlaylistAdd } from '@material-ui/icons';
import { styled } from '@material-ui/styles';

const CustomButton = styled(Fab)({
  padding: '5px',
  margin: '5px'
});

const CustomEntryForm = styled(Paper)({
    marginTop: '8%'
})

const CustomCalculations = styled(Paper)({
    marginTop: '8%'
})

let newId;
let newScore;

export default class ScoreTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        scores: [
            {id: 1234, score: 73},
            {id: 2742, score: 91},
            {id: 5121, score: 44},
            {id: 5764, score: 94},
            {id: 8743, score: 66},
            {id: 8284, score: 93},
            {id: 2476, score: 82},
            {id: 2734, score: 54},
            {id: 5387, score: 79},
            {id: 3526, score: 66},
            {id: 5231, score: 81},
            {id: 1463, score: 25},
            {id: 1463, score: 39}
        ],
        columns: [
            {title: "Student ID", field: "id"},
            {title: "Test Score", field: "score"}
        ],
        data: [],
      };
    }
    onScoreChange = (asNum, asString) => {
        newScore = asNum;
    }
    onIdChange = (asNum, asString) => {
        newId = asNum
    }
    onAddClick = () => {
        let data = this.state.scores.slice(0);
        let scores = this.state.scores;
        let id = newId;
        let ids = scores.map(({id}) => id);
        if(ids.includes(id) === false) {
            let score = newScore;   
            let addedScore = {id, score}
            data.push(addedScore);
            this.setState({ scores: data, newId: null, newScore: null })
        } else {
            alert("Cannot repeat IDs")
        }
        
    }
    onClearScores = () => {
        this.setState({ scores: [] })
    }

    render() {
      return (
        <Grid container spacing={32}>
            <Grid item xs>
                <Paper>
                    <MaterialTable 
                        columns={this.state.columns}
                        data={this.state.scores}
                        title="Student Test Scores"
                        options={{
                            pageSize: 5,
                            initialPage: 1
                        }}
                    />
                </Paper>
                <CustomEntryForm className="paper">
                    <NumericInput
                    placeholder="Enter Student ID:"
                    min={1000}
                    max={9999}
                    size={25}
                    onChange={this.onIdChange}
                    style={{
                        input: {
                            marginTop: 5,
                            marginBottom: 5,
                            height: 30,
                        },
                        btn: {
                            display: 'none'
                        }
                    }}
                    />
                    <NumericInput
                    placeholder="Enter Score:"
                    min={0}
                    max={100}
                    size={25}
                    onChange={this.onScoreChange}
                    style={{
                        input: {
                            marginTop: 5,
                            marginBottom: 5,
                            height: 30,
                            marginLeft: 2
                        },
                        btn: {
                            display: 'none'
                        }
                    }}
                    />
                    <br />
                    <CustomButton
                    variant="extended"
                    color="default"
                    size="medium"
                    onClick={this.onClearScores}>
                    <LayersClear />
                    Clear Scores 
                    </CustomButton>
                    <CustomButton
                    variant="extended"
                    color="default"
                    size="medium"
                    onClick={this.onAddClick}>
                    <PlaylistAdd />
                    Add Score 
                    </CustomButton>
                </CustomEntryForm>
            </Grid>
            <Grid item xs>
                <Paper>
                    <Graph 
                        data={this.state.scores}
                    />
                </Paper>
                <CustomCalculations>
                    <DataAnalysis 
                        data={this.state.scores}
                    />
                </CustomCalculations>
            </Grid>
        </Grid>
      );
    }
}