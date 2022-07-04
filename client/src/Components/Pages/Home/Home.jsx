// import {Component} from "react";
import {useQuery, useMutation, gql} from "@apollo/client";
import {useState,useEffect} from "react";
// class Home extends Component{
//     constructor(props){
//         super(props);
//         this.props=props;
//         this.state={
//
//         }
//     }
//
//
//     render(){
//         return(<div/>)
//     }
// }
const token = localStorage.getItem('token');
export default function Home(props){

    const [users, setUsers] = useState(<div/>)
    const {loading, error, decoded} = useQuery(gql`query{
        decode{
            _id,
            firstName
            lastName
            email
        }
    }`);
    if ( loading ) return "loading..."
    if (error)console.log(error);
    console.log(decoded);



    return(
        <div className={"verify"}>
        </div>
    )

}