const express = require('express');
const app = express();
app.use(express.json());

const cameras = [
 {id:'CAM-01', loc:'Entrance', status:'online'},
 {id:'CAM-05', loc:'Parking', status:'offline'},
 {id:'CAM-07', loc:'Lab', status:'online'},
 {id:'CAM-08', loc:'Parking', status:'online'}
];

app.get('/api/cameras', (req,res)=> res.json(cameras));
app.get('/api/events', (req,res)=> res.json([{type:'motion', camera:'CAM-01'}]));
app.get('/api/incidents', (req,res)=> res.json([{id:1, status:'open'}]));

app.listen(3000, ()=> console.log('Security Desk ready'));
