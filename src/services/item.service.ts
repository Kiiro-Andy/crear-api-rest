import { Toy } from "../interfaces/toy.interface";
import ItemModel from "../models/item";

const insertToy = async (item: Toy) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};

const getToys = async () => {
    const responseItem = await ItemModel.find({});
    return responseItem;
};
  
const getToy = async (id: string) => {
    const responseItem = await ItemModel.findOne({ _id: id });
    return responseItem;
};
const updateToy = async (id: string, data: Toy) => {
    const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data,
      {
        new: true
      });
    return responseItem;
};

const deleteToy = async (id: string) => {
  const responseItem = await ItemModel.findOneAndDelete({ _id: id }, 
  {
    new: true
  });
  return responseItem;
};

export { insertToy, getToys, getToy, updateToy, deleteToy};