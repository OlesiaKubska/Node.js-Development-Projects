const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const User = require("../models/User.js");

describe("POST /users/login", () => {
 let server;
 let user;

 beforeAll(async () => {
  //   console.log("Connecting to the database...");
  // Підключення до тестової бази даних
  await mongoose.connect("mongodb://localhost:27017/testdb");

  // Створення тестового користувача
  //   console.log("Creating test user...");
  user = new User({
   email: "test@example.com",
   password: "password123",
   subscription: "starter",
   verify: true,
   verificationToken: "testToken",
  });

  await user.save();
  server = app.listen(3000);
  console.log("Server started.");
 }, 30000);

 afterAll(async () => {
  // Закриття сервера та очищення бази даних
  await User.deleteMany({});
  await mongoose.connection.close();
  await server.close();
  //   console.log("Server stopped.");
 });

 it("should return 200 and a token for valid credentials", async () => {
  const res = await request(server).post("/users/login").send({
   email: "test@example.com",
   password: "password123",
  });

  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty("token");
  expect(res.body.user).toHaveProperty("email", "test@example.com");
  expect(res.body.user).toHaveProperty("subscription", "starter");
  console.log("Received expected response for valid credentials.");
 }, 30000);

 it("should return 401 for invalid credentials", async () => {
  const res = await request(server).post("/users/login").send({
   email: "test@example.com",
   password: "wrongpassword",
  });

  expect(res.status).toBe(401);
  expect(res.body).toHaveProperty("message", "Email or password is wrong");
  //   console.log("Received expected response for invalid credentials.");
 }, 30000);
});
