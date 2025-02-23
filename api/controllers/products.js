import { db } from "../db.js";


export const getProducts = (req, res) => {
    const query = "SELECT * FROM products"
    
    db.query(query, (err, data) => {
            if(err) return res.json(err);
            
            return res.status(200).json(data);
  });
}