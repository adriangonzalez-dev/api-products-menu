const {request, response} = require('express');
const {Category} = require('../models');

module.exports = {
    getCategories: async (req=request, res=response)=>{
        const {limit = 5, offset = 0} = req.query

        const [total, categories] = await Promise.all([
            Category.countDocuments({active:true}),
            Category.find({active:true})
            .limit(+limit)
            .skip(+offset)
        ])

        res.status(200).json({
            total,
            categories
        })
    },

    getCategoryById: async (req,res)=>{
        const {id} = req.params;

        const category = await Category.findById(id)

        res.json({
            category
        })
    },

    createCategory: async(req=request, res=response)=>{
        const name = req.body.name.toUpperCase().trim();

        const data = {
            name,
        }
        const category = new Category(data)
        
        await category.save()

        res.status(201).json({
            category
        })
    
    },

    updateCategory: async(req,res)=>{
        const {id} = req.params;

        const name = req.body.name.trim().toUpperCase();

        const data = {
            name,
        }

        const updateCategory = await Category.findByIdAndUpdate(id,data,{new:true});

        res.status(201).json({
            updateCategory
        })
    },

    deleteCategory: async (req,res)=>{
        const {id} = req.params

        const categoryDelete = await Category.findByIdAndUpdate(id,{active: false});

        res.status(200).json({
            "categoria eliminada": categoryDelete
        })
    }
}