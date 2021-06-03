import React from 'react' ;
import './App.css'
import Table from './Table' ;

class Dictionary extends React.Component {
    constructor(props) {
        super(props) ;
        this.state= {
            query: '' ,
            result : []
        }
    }
    render(){
        const languages = ['English (UK) ' , 'Hindi', 'Spanish' ,'French' , 'Japanese' , 'Russian' ,'English(UK)' ,'German' ,'Italian' ,'Korean' , 'Brazilian Portugese' ,'Arabic' ,'Turkish'] ;
        const BASEURL = 'https://api.dictionaryapi.dev/api/v2/entries/' ;
        return(
            <>
            <h1>Dictionary Component</h1>
            <form>
                <h1>Filter Component</h1>
                <input type='text' placeholder='type the word' />
                <div className='dropdown_parent'>
                    <button className='dropbtn'>Filter by Language</button>
                    <div className='dropdown_content'>
                    {languages.map(language => {
                        return(
                            <button>{language}</button>
                        )
                    })}
                    </div>
                </div>
                <button type='submit' >Submit</button>
            </form>
            <Table />
            </>
        )
    }
}

export default Dictionary ;