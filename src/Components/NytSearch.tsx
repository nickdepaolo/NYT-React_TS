import React from 'react';
import NytResults from './NytResults'

type NytProps = {

}

type NytState = {
    search: string;
    startDate: string;
    endDate: string;
    pageNumber: number;
    results: Array<any>;
    url: string;
    key: string;
}

export default class Nyt extends React.Component<NytProps, NytState> {
    constructor(props: NytProps){
        super(props)
        this.state = {
            search: '',
            startDate: '',
            endDate: '',
            pageNumber: 0,
            results: [],
            url: '',
            key: '',
        }
    }

    render() {
        return(
            <div>
                <h1>555 timer</h1>
                <NytResults/>
            </div>
        )
    }
    
}