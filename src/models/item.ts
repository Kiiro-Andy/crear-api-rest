import { Schema, Types, model, Model } from "mongoose";
import { Toy } from "../interfaces/toy.interface";

const ItemSchema = new Schema<Toy>(
    {
        name:{
            type: String,
            required:true,
        },
        color:{
            type: String,
            required:true,
        },
        tamano:{
            type: String,
            enum: ["Grande", "Mediano", "Peque"],
            required:true,
        },
        year:{
            type: Number,
            required:true,
        },
        descripcion:{
            type: String,
            required:true,
        },
        precio:{
            type: Number,
            required:true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ItemModel = model('items', ItemSchema);
export default ItemModel