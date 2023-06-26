const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../../app");
const { User } = require("../../models/user");

const { PORT, DB_HOST_TEST } = process.env;

describe("test register route", () => {
  let server = null;
  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);
    server = app.listen(PORT);
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  test("test correct register data", async () => {
    const registerData = {
      email: "example@example.com",
      password: "examplepassword",
    };
    const { body, statusCode } = await request(app)
      .post("/api/users/register")
      .send(registerData);

    expect(statusCode).toBe(201);
    expect(body.email).toBe(registerData.email);

    const user = await User.findOne({ email: registerData.email });

    expect(user.email).toBe(registerData.email);
  });
});
