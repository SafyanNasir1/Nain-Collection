import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const {
      customerName,
      phone,
      email,
      address,
      city,
      items,
      subtotal,
      total,
      paymentMethod,
    } = body;

    if (!customerName?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Customer name is required",
        },
        { status: 400 },
      );
    }

    if (!phone?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number is required",
        },
        { status: 400 },
      );
    }

    if (!address?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Address is required",
        },
        { status: 400 },
      );
    }

    if (!city?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "City is required",
        },
        { status: 400 },
      );
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Order items are required",
        },
        { status: 400 },
      );
    }

    if (total === undefined || total === null) {
      return NextResponse.json(
        {
          success: false,
          message: "Order total is required",
        },
        { status: 400 },
      );
    }

    if (!paymentMethod) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment method is required",
        },
        { status: 400 },
      );
    }

    const order = await Order.create({
      customerName,
      phone,
      email: email || "",
      address,
      city,

      items,

      subtotal,
      total,

      paymentMethod,

      paymentStatus: "pending",
      orderStatus: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Order created successfully",

        order: {
          id: order._id.toString(),
          customerName: order.customerName,
          phone: order.phone,
          email: order.email,
          address: order.address,
          city: order.city,

          items: order.items,

          subtotal: order.subtotal,
          total: order.total,

          paymentMethod: order.paymentMethod,
          paymentStatus: order.paymentStatus,
          orderStatus: order.orderStatus,

          createdAt: order.createdAt,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("ORDER API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create order",
      },
      { status: 500 },
    );
  }
}