import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("Authorization");
  const token = header?.split(" ")[1] || "";
  try {
    const response = await verify(token, c.env.JWT_SECRET);
    if (response) {
      c.set("userId", response);
      await next();
    }
  } catch (error) {
    return c.json({ message: "Unauthorized" });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const userId = c.get("userId");
  console.log(userId);
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const response = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    return c.json(response);
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
      message: "Error while creating",
    });
  }
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const response = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json(response);
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
      message: "Error while Updating",
    });
  }
});

blogRouter.get("get/:id", async (c) => {
  const body = await c.req.json();
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const response = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    if (!response) {
      c.status(404);
      return c.json({ message: "Cannot find the post with the given id" });
    }
    return c.json(response);
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({ message: "Error Fetching the resource" });
  }
});

//todo add pagination here
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const response = await prisma.post.findMany();
    return c.json({ response });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({
      message: "Error Fetching the blogs",
    });
  }
});
