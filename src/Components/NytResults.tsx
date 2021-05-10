import React from 'react';


type NytProps = {
    results: any
    changePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, direction: string) => any;
}



export default class NytResults extends React.Component<NytProps, {}> {

    render() {

        return(
            <div>
                {this.props.results.map((result: { id: React.Key | null | undefined; headline: { main: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; multimedia: string | any[]; snippet: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; keywords: any[]; web_url: string | undefined; }) => {
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
                })}
                
            </div>
        );

    }

}