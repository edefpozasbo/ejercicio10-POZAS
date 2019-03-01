var mongoose=require("mongoose");
var schema=require("./schema");

mongoose.connect("mongodb://localhost:27017/reviews",{useNewUrlParser:true});

var Post=mongoose.model("Post",schema,"post");

var post=new Post({
    title:"El día despues de mañana",
    author:"John Smith",
    body:"En esta increible hazaña encontraremos a todos nuestros ...",
    comments:[
        {
            body:"Me parecio excelente...",
            date:Date.now()
        }
    ],
    meta:{
        votes:10,
        favs:2
    }
});

post.save(err=>{
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("---------INGRESADO----------");
});

Post.find({author:"John Smith"},(err,res)=>{
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("---------BUSCADO----------");
    console.log(res);
});

Post.update({_id:"5c76d48120b3bf16b4de2643"},{$set:{meta:{votes:50}}},(err,res)=>{
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("---------ACTUALIZADO----------");
    console.log(res);
});

Post.remove({_id:"5c76d48120b3bf16b4de2643"},(err,res)=>{
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("---------BORRADO----------");
    console.log(res);
});


