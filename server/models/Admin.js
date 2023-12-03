import { model,Schema } from "mongoose";

const traineSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{ timestamps: true })

const Admin = model("sign", traineSchema);
export default Admin;