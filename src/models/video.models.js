import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const VideoSchema = new mongoose.Schema({
    videoFile:{
        type:String, //cloudinary url
        required:true
    },
    thumnail:{
        type:Strirng,    //cloudinary url
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,    //cloudinary url
        required:true
    },
    views:{
        type:Number,
        required:true,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    }

},{timestamps:true})

VideoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model('Video' ,VideoSchema)