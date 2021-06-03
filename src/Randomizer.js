import React from 'react' ;

class Randomizer extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            response:[]
        }
    }
    render() {
        const APIBASE = 'https://random-words-api.vercel.app/word/' ;
        //No api key required
        const Fetch_function = async() => {
            await fetch(`${APIBASE}`)
            .then(data => data.json())
             .then(response => this.setState({response : response }))
             .catch(err => console.error(err)) 

            console.log('reached fetch function')
        }
        
        return(
            <>
                <h1>Randomizer</h1>
                <button onClick={() => Fetch_function}> Randomize</button>
                <div>
                    <h3>word : {this.state.response.word} </h3> 
                    <h5>definition : {this.state.response.definition}</h5>
                    <h4>pronounciation : {this.state.response.pronunciation}</h4>
                </div>
            </>
        )
    }
}

export default Randomizer ;