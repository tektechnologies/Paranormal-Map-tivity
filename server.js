'use strict';

const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

const app=express();
const TOKEN=process.env.TOKEN;
if(!TOKEN) throw new Error('TOKEN missing');

const PORT=process.env.PORT;
if(!PORT){throw new Error('PORT is a ghost');}

app.use(cors());
app.use(express.static('./public'));
/* use these to recieve posts if needed in the furture
app.use(express.json());
app.use(express.urlencoded({extended:true}));
*/

app.listen(PORT,()=>console.log('Listening on PORT:'+PORT));

app.get('/',(req,res)=>res.sendFile('index.html'));

app.get('/api/ghosts',(req,res)=>{
  superagent.post('https://api.data.world/v0/sql/timothyrenner/haunted-places')
    .set('Authorization',`Bearer ${TOKEN}`)
    .type('form')
    .send({query:'SELECT * FROM haunted_places_2 LIMIT 10'})
    .then((result)=>{
      res.send(results.body);
    }, err=>{
      console.error(err);
      res.sendStatus(500).send(err);
    });
});

app.get('/api/ufos', (req,res)=>{
  superagent.post('https://api.data.world/v0/sql/timothyrenner/ufo-sightings')
    .set('Authorization', `Bearer ${TOKEN}`)
    .type('form')
    .send({query: 'SELECT * FROM nuforc_reports LIMIT 10'})
    .then((result)=>{
      res.send(result.body);
    }, err=>{
      res.sendStatus(500).send(err);
    });
});

app.get('/api/bigfoot', (req,res)=>{
  superagent.post('https://api.data.world/v0/sql/timothyrenner/bfro-sightings-data')
    .set('Authorization', `Bearer ${TOKEN}`)
    .type('form')
    .send({query: 'SELECT * FROM bfro_report_locations LIMIT 10'})
    .then((result)=>{
      res.send(result.body);
    }, err=>{
      res.sendStatus(500).send(err);
    });
});