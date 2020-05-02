const mongoose = require('mongoose');

const PostModel = require('../models/TodoItem')
let Post = mongoose.model('Post', PostModel);

module.exports = {
    getPost: ({_id}) => { 
        return Post.findById(_id);
    },


    getAllPosts: () => {
            return Post.find();
    },


    createPost: ({input}) => {
            return Post.create(input);
    },

    updatePost: ({_id, input}) => {
            return Post.findByIdAndUpdate(_id,input,{new: true})
    },

    deletePost: ({_id}) => {
            return Post.findByIdAndDelete(_id);
    }
};