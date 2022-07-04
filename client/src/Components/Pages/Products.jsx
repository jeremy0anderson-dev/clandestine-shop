import {Component} from "react";
import mutations from '../../utils/mutations';
import {useMutation, useQuery} from '@apollo/client';

export default class ProductMain extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state={
            products: []
        }
    }

    get products(){

    }

    render(){
        return(<div/>);
    }
}



export default function Products(props){

}

