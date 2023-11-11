import mongoose, { InferSchemaType } from "mongoose";

const PhotoSchema = new mongoose.Schema({
  filename: { type: String},
  mimetype: { type: String},
}, { timestamps: true })

type IPhoto = InferSchemaType<typeof PhotoSchema>

const Photo = mongoose.model("propertiesphotos", PhotoSchema)

export {
  Photo,
  IPhoto
}