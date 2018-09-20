import {
    pickBy,
    get,
    isUndefined
} from 'lodash'
import mongoose from 'mongoose'
import '../models/someInstance';

const Instance = mongoose.model('Instance');

const listFormat = async (list, filters) => {
    const total = await Instance.countDocuments(filters);
    return {
        items: list,
        total
    }
};

// TODO: filter values validation
const filterFormatter = obj => {
    return pickBy(obj, (value, key) => {
        return !!value
    })
};

export const getInstanceList = (req, res) => {

    const {
        query: filters
    } = req;

    const {
        offset, count
    } = filters;

    const f = filterFormatter(filters);

    Instance.find(f, null, {skip: +offset, limit: +count}, async (err, data) => {

        if(err){
            res
                .status(500)
                .send({
                message: 'Server error',
                body: err
            })
        } else{
            res
                .status(200)
                .json(await listFormat(data, f))
        }
    });
};


export const getInstance = (req, res) => {
    const {id} = req.params;

    if(!id){
        res.status(400).send({
            message: 'id is required'
        })
    } else{
        Instance.findOne({uid: id}, (err, data) => {
            if(err){
                res.status(500).send({
                    message: 'Server error',
                    body: err
                })
            } else if(!data) {
                res.status(404).send('not found')
            } else{
                res.status(200).json(data)
            }
        });
    }
};
