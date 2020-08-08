import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { getKey } from "../global/Utils";
const axios = require("axios");

export default function CharacterPage(){
    let shouldFetch = true;
    let { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
      console.log("came first use efect");
      axios
        .get(
          "https://gateway.marvel.com/v1/public/characters/"+id+getKey()
        )
        .then(function (response) {
          shouldFetch = false;
          setData(response.data.data);
          console.log(response);
        })
        .catch(function (error) {
        })
        .then(function () {
        });
    }, [shouldFetch]);
    return(    console.log('id',id)
,    <div>
        testee
    </div>)
}