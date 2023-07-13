import { Cat } from './../types/cat'
import CatModel from './../models/cat'

export const getCats: () => Promise<Array<Cat>> = () => {
  return CatModel.find()
}
