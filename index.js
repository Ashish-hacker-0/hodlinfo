const { response, json } = require('express');
const express=require('express');
const fetch= require('node-fetch');
const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));

var string ={
    name:'Ashish',

}


app.get('/',function(req,res){
   
    fetch('https://api.wazirx.com/api/v2/tickers')
    .then((response) => response.json())
    .then((json)=>{
        var arr=new Array();
        console.log(json);
        console.log(json.btcinr);
      for( var key in json){
          console.log(toString(key));
          console.log(json[key]);
         arr.push(json[key]);
      }
     res.render('index',{data:arr});
    });
});

let port = process.env.PORT;

if(port==null ||port==""){
    port=3000;
}

app.listen(port,function(){
    console.log('done');
})