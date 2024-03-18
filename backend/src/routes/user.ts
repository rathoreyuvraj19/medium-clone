import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { z } from "zod";
import { signUpInput, signInInput } from "@rathore.yuvraj19/common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body: { email: string; password: string; name?: string } =
    await c.req.json();
  const parsedInput = signUpInput.safeParse(body);
  if (!parsedInput.success) {
    c.status(403);
    return c.json({
      message: "Invalid Input",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const response = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });

    const JWT_SECRET: string = c.env.JWT_SECRET;
    const token: string = await sign(response.id, JWT_SECRET);
    return c.json({ token: token });
  } catch (e) {
    c.status(403);
    return c.json({ error: "error while signing up" });
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const parsedInput = signInInput.safeParse(body);
  if (!parsedInput.success) {
    c.status(403);
    return c.json({
      message: "Invalid Input",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const response = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (!response) {
      c.status(403);
      return c.json({ error: "user not found" });
    }
    if (response?.password === body.password) {
      const token: string = await sign(response?.id, c.env.JWT_SECRET);
      return c.json({ token: token });
    } else {
      throw new Error("Password doesn't match");
    }
  } catch (error) {
    console.error("Error during user signin:", error);
    c.status(403); // Set appropriate status code for authentication failure
    return c.json({ error: "Authentication failed" });
  }
});
