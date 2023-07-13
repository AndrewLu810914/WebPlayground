import mongoose, { model, Schema } from 'mongoose'
import { Cat } from '../types/cat'
const catSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)
export default mongoose.models.Cat || model<Cat>('Cat', catSchema)
