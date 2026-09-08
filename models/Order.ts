import mongoose, { Schema, Document, Model } from "mongoose";

export interface IOrder extends Document {
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  city: string;

  items: {
    id: number;
    title: string;
    subtitle: string;
    price: number;
    quantity: number;
    image?: string;
  }[];

  subtotal: number;
  total: number;

  paymentMethod: string;
  paymentStatus: string;
  orderStatus: string;

  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      default: "",
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },
    
    city: {
      type: String,
      required: true,
      trim: true,
    },

    items: [
      {
        id: {
          type: Number,
          required: true,
        },

        title: {
          type: String,
          required: true,
        },
        subtitle: {
          type: String,
          required: true,
        },

        price: {
          type: Number,
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
        },

        image: {
          type: String,
        },
      },
    ],

    subtotal: {
      type: Number,
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    paymentStatus: {
      type: String,
      default: "pending",
    },

    orderStatus: {
      type: String,
      default: "pending",
    },
  },

  {
    timestamps: true,
  },
);

const Order: Model<IOrder> =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;