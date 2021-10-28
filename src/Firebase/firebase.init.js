import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";


const initialAuthrentication =()=>{
   initializeApp(firebaseConfig)
}

export default initialAuthrentication;