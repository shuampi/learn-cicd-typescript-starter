import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

const person = {
  isActive: true,
  age: 32,
};

const mockedHttpHeader: IncomingHttpHeaders = {
  authorization: "ApiKey authorizationesss",
};
const mockedHttpHeaderNull: IncomingHttpHeaders = {
  authorization: " authorization",
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});

describe("getApiKey tests", () => {
  test("extract correct api key", () => {
    expect(getAPIKey(mockedHttpHeader)).toBe("authorization");
  });
  test("extract correct api key", () => {
    expect(getAPIKey(mockedHttpHeaderNull)).toBeNull();
  });
});
