import Movies from "../module/Movies.js";

const addMovies=async(req,res)=>{
    try {
        let title= req.body.title;
        const Xmovie=await Movies.findOne({title:title});
        if(Xmovie){
            res.status(400).send("Movie already exits")
        }else{
            const newMovie = Movies({
                title:title,
                year:req.body.year,
                genre:req.body.genre,
                discription:req.body.dis,
                img:req.body.img

            })
            const result=await newMovie.save();
            res.status(200).send("Movie added successfully")
        }
    } catch (error) {
        console.log(error.message);
    }
}

const getall=async(req,res)=>{
    try {
        let data= await Movies.find();
        if(data){
            res.status(200).send(data)
        }else{
            res.status(400).send("no data")
        }
    } catch (error) {
        
    }
}

export default {addMovies,getall}