import React from 'react';


type NytProps = {
    results: any
    changePage: (event: any, direction: string) => any;
}



export default class NytResults extends React.Component<NytProps, {}> {

    render() {

        return(
            <div>
                {this.props.results.map(result => {
                    return(
                        <div key={result.id}>
                            <h3>{result.headline.main}</h3>
                            {result.multimedia.length > 1 ? <img alt='article' src={`http://www.nytimes.com/${result.multimedia[1].url}`}/> : ''}
                            <p>
                                {result.snippet}
                                <br/>
                                {result.keywords.length > 0 ? 'Keywords:' : ''}
                            </p>
                                <ul>
                                    {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
                                </ul>
                                <a href={result.web_url}><button>Read It</button></a>
                                <div>
                                    <button onClick={(e) => this.props.changePage(e, 'down')}>Previous 10</button>
                                    <button onClick={(e) => this.props.changePage(e, 'up')}>Next 10</button>
                                </div>
                        </div>
                    )
                })}.
                
            </div>
        );

    }

}