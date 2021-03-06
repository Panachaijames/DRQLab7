import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export class MoviesItem extends React.Component {

    constructor()
    {
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    DeleteMovie(e){
        e.preventDefault();
        console.log("Delete: "+this.props.movie._id);
        axios.delete("http://localhost:3000/api/movies/"+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }
    render() {
        return (
            <div>
                {/*
            <h3>{this.props.movie.Title}</h3>
            <p>{this.props.movie.Year}</p>
            <img src={this.props.movie.Poster} width="200" height="200"></img>
        */}
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.movie.year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>

        );
    }
}