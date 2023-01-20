const {Product} = require('../models');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME_CLOUDINARY,
    api_key: process.env.API_KEY_CLOUDINARY,
    api_secret: process.env.API_SECRET_CLOUDINARY
})

module.exports = {
    updateImageCloudinary:async(req,res=response)=>{
        const {id} = req.params;

        if(!req.file){
            return res.status(400).json({
                msg: 'Debe subir una imagen'
            })
        }

        try {
            const product = await Product.findById(id);

            //Verificar si posee imagen
            if(product.img){
            /* //Verificar si existe el archivo imagen
            const pathImage = product.img.split('/')[7].split('.')[0] */
            await cloudinary.uploader.destroy(product.img_public_id)
            }
            //subir con cloudinary
            const {secure_url, public_id} = await cloudinary.uploader.upload(req.file.path)
  
            product.img = secure_url
            product.img_public_id = public_id
  
            await product.save()
  
            res.status(201).json({product})
        } catch (error) {
            console.log(error)
        }
      },
}