import React, { SyntheticEvent } from 'react';
import NytResults from './NytResults'

type NytProps = {
    
}

type NytState = {

    search: string;
    startDate: string;
    endDate: string;
    pageNumber: number;
    results: any;
    url: string;
    key: string;
   
}


export default class Nyt extends React.Component<NytProps, NytState> {
    constructor(props: {}){

        super(props)

        this.state = {
            search: '',
            startDate: '',
            endDate: '',
            pageNumber: 0,
            results: [],
            url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
            key: 'rpEYJfLGzALSgM3tA39gyHAmJ9fuXSfT',
            
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    fetchResults = () => {
        const baseurl= 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
        let url = `${baseurl}?api-key=${this.state.key}&page=${this.state.pageNumber}&q=${this.state.search}`;
        url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url;
        url = this.state.endDate ? url + `end_date=${this.state.endDate}` : url;
        console.log(this.state.url);
        
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({results: data.response.docs}))
        .catch(err => console.log(err));
        console.log('test');
        
    };

    handleSubmit = (event: SyntheticEvent): void => {
        console.log('1234');
        
        event.preventDefault();
        this.setState({
            pageNumber : 0
        });
        this.fetchResults();
        console.log('test2');
        
    }

    changePageNumber = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, direction: string) => {
        event.preventDefault()
        if (direction === 'down') {
            if (this.state.pageNumber > 0) {
                this.setState({pageNumber: - 1});
                this.fetchResults();
            }
        }
        if (direction === 'up') {
            this.setState({pageNumber: + 1});
            this.fetchResults();
        }
    }


    render() {

        return(

            <div className='main'>
            <div className='mainDiv'>
                <form onSubmit={this.handleSubmit}>
                    <span>Enter a single search term (required) :</span>
                    <input type='text' name='search' onChange={(e) => this.setState({search: e.target.value})}/>
                    <br/>
                    <span>Enter a start date : </span>
                    <input type='date' name='startDate' pattern='[0-9]{8}' onChange={(e) => this.setState({startDate: e.target.value})}/>
                    <br/>
                    <span>Enter a end date: </span>
                    <input type='date' name='endDate' pattern='[0-9]{8}' onChange={(e) => this.setState({endDate: e.target.value})}/>
                    <br/>
                    <button type= 'submit' className='submit'>Submit search</button>
                </form>
                {this.state.results.length > 0 ? <NytResults results={this.state.results} changePage={this.changePageNumber} /> : null}
            </div>
        </div>

        )

    }
    
}


