/**
 * UserController
 */
const pool = require('../../config/dbConfig');

class ItemController {
  constructor() {}

  async getItem(req, res, next) {
    pool.getConnection((err, conn) => {
      if(err) throw err;
      const sql = 'SELECT * FROM tbitem';
      conn.query(sql, (err, row) => {
        if(err) throw err;
        req.userData = row;
        if(row.length === 0) {
          next();
        }else{
          res.send(row);
        }
        
      })
    })
  }

  async getItemDetail(req, res, next) {
    console.log("Second Function");
    res.send(req.userData);
  }
}

module.exports = ItemController;
