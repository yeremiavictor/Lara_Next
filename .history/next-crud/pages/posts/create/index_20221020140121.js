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
        
    }
}