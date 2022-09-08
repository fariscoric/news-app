import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "4c71a0f523e547538b96e4f41c4405b7";

export default function Tesla() {
const [article, setArticle] = useState([]);

function getArticle() {
    axios.get (
    `${BASE_URL}/everything?q=apple&from=2022-09-07&to=2022-09-07&sortBy=popularity&apiKey=${API_KEY}`
)
.then((res) => {
    setArticle(res.data.articles);
});
}

useEffect(()=> {
    getArticle()
},[article])

    return (
        
        <div>
            {article.map((art) => (
                <div>
                    <h1>{art.author}</h1>
                    <h3>{art.title}</h3>
                    <h5>{art.description}</h5>
                    <h4/>
                </div>
            ))}
        </div>
    )
}
