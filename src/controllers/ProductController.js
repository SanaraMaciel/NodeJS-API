const mongoose = require('mongoose');

const Product = mongoose.model('Product');

//exportar os objetos com alguas funções
module.exports = {
 
    async index(req, res){
        const { page  = 1} = req.query;
        const products = await Product.paginate({},{page, limit:10});
        return res.json(products);
    },

    //método para mostrar os detalhes de um produto
    async show(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    //método para criar novos produtos
    async store(req, res){
        const product = await Product.create(req.body);
        return res.json(product);
    },

    //método para alterar um produto
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
        return res.json(product);
    },

    //método para deletar um produto
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }

};