import joi from 'joi';
import  dotenv  from 'dotenv';
import Products from '../models/products';

dotenv.config();

const validateProducts = joi.object({
  name: joi.string().required,
  price: joi.number().required,
  title: joi.string().required,
});

const getAll = async (req, res) => {
    try {
        const products = await Products.find();
        if (products.length === 0){
            console.log("Không có dữ liệu để hiển thị");
        }
        return res.json({
            message: "Lấy dữ liệu thành công",
            products,
        })
    } catch (error) {
        return res.status(404).json({
            message: error,
        })
    }
}
const getOne = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      console.log("Lấy dữ liệu không thành công");
    }
    return res.json({
      message: "Lấy dữ liệu thành công",
      product,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
const AddProducts = async (req, res) => {
  try {
    const products = await Products.create(req.body);
    if (!products) {
      console.log("Thêm liệu không thành công");
    }
    return res.json({
      message: "Thêm dữ liệu thành công",
      products,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const UpdateProducts = async (req, res) => {
  try {
    const products = await Products.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
    if (!products) {
      console.log("Thêm liệu không thành công");
    }
    return res.json({
      message: "Thêm dữ liệu thành công",
      products,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
const DeleteProducts = async (req, res) => {
  try {
    const products = await Products.findByIdAndDelete(req.params.id);
    if (!products) {
      console.log("Xóa không thành công");
    }
    return res.json({
      message: "Xóa dữ liệu thành công",
      products,
    });
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

export { getAll, getOne, AddProducts, UpdateProducts, DeleteProducts};