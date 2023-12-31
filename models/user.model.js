import { Schema, model } from "mongoose";

const userSchema = Schema({
  name: {
    type: String,
    require: [true, "El nombre es requerido"],
  },
  email: {
    type: String,
    require: [true, "El correo es requerido"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "La contraseña es obligatoria"],
  },
  img:{
    type:String
  }, 
  rol:{
    type:String,
    require:true,
    enum:['admin', 'user']
  }, 
  state:{
    type:Boolean,
    default:true
  },
  google:{
    type:Boolean,
    default:false
  }
});

export default model('User',userSchema);
