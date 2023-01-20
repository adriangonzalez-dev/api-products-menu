const { request } = require('express')
const {Category, Product} = require('../models')

const validRole = async (role = '')=>{
    const rolExists = await Role.findOne({role})
    if(!rolExists){
        throw new Error(`El rol ${role} no se encuentra en la Base de datos`)
    }
}

const emailExists = async (email)=>{
    const emailExist = await User.findOne({email})
    if(emailExist){
        throw new Error(`El email ${email} ya se encuentra registrado`)
    }
}

const idExists = async (id)=>{
    const idExist = await User.findById(id)
    if(!idExist){
        throw new Error(`El id ${id} no existe`)
    }
}

//se ussa
const categoryExists = async (categoryName)=>{
    let category = categoryName.toUpperCase().trim()
    const categoryExist = await Category.findOne({name: category})
    if(categoryExist !== null){
        throw new Error(`La categoria ${categoryName} ya se encuentra registrada`)
    }
}

//se usa
const idCategoryExist = async (id)=>{
    const idExist = await Category.findById(id)
    if(!idExist){
        throw new Error(`La categoria con id ${id} no existe`)
    }
}

//se usa
const validCategory = async (category = '')=>{
    const name = category.toUpperCase();
    const categoryExist = await Category.findOne({name})
    if(!categoryExist){
        throw new Error(`La categoría ${category} no se encuentra en la Base de datos`)
    } else {
        request.category = categoryExist
    }
}

//se usa
const validProductName = async (name = '')=>{
    const nameProduct = name.toUpperCase();
    const nameExist = await Product.findOne({name: nameProduct})
    if(nameExist){
        throw new Error(`El producto ${name} ya se encuentra registrado`)
    }
}

//se usa
const idProductExist = async (id)=>{
    const idExist = await Product.findById(id)
    if(!idExist){
        throw new Error(`El producto con id ${id} no existe`)
    }
}

const ValidCollection = (collection='', collections=[])=>{
    if(!collections.includes(collection)){
        throw new Error(`${collection} no es una colección válida`)
    }

    return true;
}

module.exports = {
    validRole,
    emailExists,
    idExists,
    categoryExists,
    idCategoryExist,
    validCategory,
    idProductExist,
    ValidCollection,
    validProductName
}