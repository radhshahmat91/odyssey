import mongoose,{Schema,models,model} from 'mongoose';
const BookingSchema=new Schema({userId:{type:Schema.Types.ObjectId,ref:'User',required:true},type:{type:String,enum:['hotel','flight'],required:true},destination:{type:String,required:true},name:{type:String,required:true},date:{type:String,required:true},guests:{type:Number,default:1},details:{type:String}},{timestamps:true});
export default models.Booking||model('Booking',BookingSchema);
