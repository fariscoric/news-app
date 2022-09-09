import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NextUIProvider, Button, Card, Text } from '@nextui-org/react';
import './Axios.css'

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "73ee3ed077964d4ca849c72cca94a037";

export default function Axios() {
const [article, setArticle] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [comp, setComp] = useState('/everything?q=tesla&from=2022-08-09&pageSize=4&sortBy=publishedAt&apiKey=');
const [pagination, setPagination] = useState({});

function getArticle() {
    axios.get (
    `${BASE_URL}${comp}${API_KEY}`
)
.then((res) => {
    setArticle(res.data.articles);
});
}

useEffect(()=> {
    getArticle()
},[article])


    return (
        
            <div className='container'>
            <Button.Group size='xl' color='gradient' ghost>
                <Button onClick={() => {
                    setComp('/everything?q=tesla&from=2022-08-09&pageSize=4&sortBy=publishedAt&apiKey=');
                }}>Tesla</Button>
                <Button onClick={() => {
                    setComp('/everything?q=apple&from=2022-09-08&to=2022-09-08&pageSize=4&sortBy=popularity&apiKey='); 
                }}>Apple</Button>
                <Button onClick={() => {
                    setComp('/everything?domains=wsj.com&pageSize=4&apiKey=');
                }}>WSJ</Button>
            </Button.Group>
            <div className='newsShow'>
            {article.map((art) => (
                <Card isHoverable variant="bordered" css={{mw: "400px"}} className='newsCard'>
                    <Card.Body>
                        <Text>
                            <h1>{art.author}</h1>
                            <h3>{art.title}</h3>
                            <h5>{art.description}</h5>
                        </Text>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </div>
    )
}
