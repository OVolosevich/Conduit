import axios, { AxiosError } from "axios";
import ApiClient from "../../ApiClient";
import assert from "assert";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);

describe("ApiClient.registerUser", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns a user object", async () => {
    const user = {
      username: "username",
      email: "email",
      password: "password",
      token: "token",
      image: null,
      bio: null,
    };

    mockedAxios.post.mockResolvedValueOnce({
      status: 200,
      data: {
        user,
      },
    });

    const result = await ApiClient.registerUser({
      username: "username",
      email: "email",
      password: "password",
    });

    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(result).toEqual(user);
  });

  it("throws an error if user info is empty", async () => {
    const responseOnFail = {
      message: "fails",
      response: {
        status: 422,
        data: {
          errors: ["can't be blank"],
        },
      },
    };
    const emptyUser = {
      username: "",
      email: "",
      password: "",
    };

    mockedAxios.post.mockRejectedValueOnce(responseOnFail);
    try {
      await ApiClient.registerUser(emptyUser);
      assert.fail("mustn't go here");
    } catch (error) {
      if (error instanceof AxiosError) {
        expect(error.response?.status).toBe(422);
      }
    } finally {
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    }
  });

  it("throws network error if url is wrong", async () => {
    mockedAxios.post.mockRejectedValueOnce(new Error("Network error"));
    try {
      await ApiClient.registerUser({
        username: "username",
        email: "email",
        password: "password",
      });
      assert.fail("mustn't go here");
    } catch (e) {
     if (e instanceof Error) {
      expect(e.message).toBe("Network error");
     }
    } finally {
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    }
  });

  it("throws custom error if response status code is not 200", async () => {
    mockedAxios.post.mockResolvedValueOnce({
      status: 500,
      data: {},
    });

    try {
      await ApiClient.registerUser({
        username: "username",
        email: "email",
        password: "password",
      });
      assert.fail("mustn't go here");
    } catch (e) {
      if (e instanceof Error)  {
        expect(e.message).toBe("registerUser fn fails");
      }
    } finally {
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    }
  });
});
