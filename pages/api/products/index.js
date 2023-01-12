import dbConnect from './../../../util/mongo';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token

  dbConnect()

  if (method === 'GET') { // se o método for GET, pega a lista de produtos exportada de Product
    try{
      const products = await Product.find();
      res.status(200).json(products)
    }catch{
      res.status(500).json(err)
    }
  }
  if (method === 'POST') { // se for o método POST, cria um item no schema exportado
    if ( !token || token !== process.env.token) {
      return res.status(401).json('você não está autenticado')
    }
    try{
      const product = await Product.create(req.body);
      res.status(201).json(product)
    }catch(err){
      res.status(500).json(err)
    }
  }
} 
