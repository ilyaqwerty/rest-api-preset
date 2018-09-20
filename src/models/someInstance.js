import mongoose from 'mongoose'

const {Schema} = mongoose;

const someInstance = new Schema({
    field1: String,
    field2: String,
    field3: String
});

mongoose.model('SomeInstance', someInstance, 'SomeInstance');