const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoPostSchema = new Schema(
    {
        postTitle:{
            type: String,
            rewuired: true,
        },
        userId:{
            type: Schema.Types.ObjectId,//一种固定写法，只要引用别的object就要这么写。
            ref: 'User',
        },
        videoUrl:{
            type: String,
            required: true,
        },
        restaurantName:{
            type: String,
        },
        restaurantAddress:{
            street:{
                type: String,
                //required:true,
            },
            city:{
                type: String,
                //required:true,
            },
            state:{
                type: String,
                uppercase: true,
                //required:true,
                //enum: constants.statesArray,
            },
            zipcode:{
                type: String,
                //required:true,
            },
            type: String,
        },
        orderedVia:{
            type: String,
        },
        postTime:{
            type: Date,
            required: true,
        },
        countComment:{
            type: Number,
            default:0,
        },
        countLike:{
            type: Number,
            default:0,
        },
        countCollections:{
            type: Number,
            default:0,
        },
        likes:{
            {
                user:{
                    type:Schema.Types.ObjectId,
                    ref: 'User',
                }
            }
        
        },
        comments:{
            {
                user:{
                    type:Schema.Types.ObjectId,
                    ref: 'User',
                },
                text:{
                    type: String,
                    required: true,
                },
                date:{
                    type:Date,
                    default: Date.now,
                }
            }
        
        }

    }
);

    module.exports = mongoose.model ( 'VideoPost', videoPostSchema);