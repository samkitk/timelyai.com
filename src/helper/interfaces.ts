import { Decimal } from "@prisma/client/runtime";
import { Request } from "express";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface CustomRequest extends Request {
  user?: {
    id: string;
    role: string;
    email: string;
  };
}

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

export interface CreateBusInput {
  id: number;
  capacity: number;
}

export interface UpdateBusInput {
  capacity?: number;
}

export interface CreateRouteInput {
  id: string;
  source: string;
  destination: string;
  time_to_travel: number;
}

export interface UpdateRouteInput {
  id: string;
  source?: string;
  destination?: string;
  time_to_travel?: number;
}

export interface CreateScheduleInput {
  id: string;
  bus_id: number;
  route_id: string;
  departure_time: Date;
  arrival_time: Date;
  fare: Decimal;
}

export interface UpdateScheduleInput {
  id: string;
  bus_id?: number;
  route_id?: string;
  departure_time?: Date;
  arrival_time?: Date;
  fare?: Decimal;
}