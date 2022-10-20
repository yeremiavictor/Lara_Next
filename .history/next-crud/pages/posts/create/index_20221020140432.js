import { useState } from "react";
import Router from 'next/router'
import Layout from "../../../components/layout";
import axios from "axios";

function PostCreate() {
    //state
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    //state validation
    const [validation, setValidation] = useState({});

    //function handleFileChange
    const handleFileChange = (e) => {
        //define var to get val image data
        const imageData = e.target.files[0]

        //check validation file
        if(!imageData.type.match('image.*')){
            //set state image to null
            setImage('');

            return
        }

        //assign file to state 'image'
        setImage(imageData)

    //method storePost
    const StorePost = async(e) => {
        e.preventDefault();

        //define formData
        const formData = new FormData();
    }
    
    }
}