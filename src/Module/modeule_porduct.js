

export default class ProductModel{
    constructor(_id,_name,_disc,_price,_imageUrl){

        this.id = _id
        this._name = _name
        this._disc = _disc
        this._price = _price
        this._imageUrl =_imageUrl
    }

    static get(){
        return products;
    }
}

var products =[
    new ProductModel(
        1,
        'Product 1',
        'Description for Product 1',
        19.99,
        'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
      ),
      new ProductModel(
        2,
        'Product 2',
        'Description for Product 2',
        29.99,
        'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
      ),
      new ProductModel(
        3,
        'Product 3',
        'Description for Product 3',
        39.99,
        'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
      ),
]