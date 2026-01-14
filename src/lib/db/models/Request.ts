import mongoose, { Schema, Model, Document } from 'mongoose';


export interface IRequest extends Document {
  requestorName: string;
  itemRequested: string;
  createdDate: Date;
  lastEditedDate?: Date;
  status: 'pending' | 'completed' | 'approved' | 'rejected';
}

const RequestSchema: Schema<IRequest> = new Schema(
  {
    requestorName: {
      type: String,
      required: [true, 'Requestor name is required'],
      minlength: [3, 'Requestor name must be at least 3 characters'],
      maxlength: [30, 'Requestor name must not exceed 30 characters'],
      trim: true,
    },
    itemRequested: {
      type: String,
      required: [true, 'Item requested is required'],
      minlength: [2, 'Item requested must be at least 2 characters'],
      maxlength: [100, 'Item requested must not exceed 100 characters'],
      trim: true,
    },
    createdDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    lastEditedDate: {
      type: Date,
      required: false,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ['pending', 'completed', 'approved', 'rejected'],
        message: 'Status must be one of: pending, completed, approved, rejected',
      },
      default: 'pending',
    },
  },
  {
    timestamps: false, 
  }
);

// Prevent model overwrite during hot reloads in development
const Request: Model<IRequest> =
  mongoose.models.Request || mongoose.model<IRequest>('Request', RequestSchema);

export default Request;
