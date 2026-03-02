import { z } from "zod";

const positiveIntSchema = z.coerce.number().int().positive();

export function parsePositiveInt(value: string | undefined): number {
  return positiveIntSchema.parse(value);
}