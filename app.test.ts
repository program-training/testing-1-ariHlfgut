import {
  arraySeries,
  fetchUserData,
  getNextFibonacciValue,
  myLength,
  palindrome,
  sqrt,
  sumArray,
} from "./app";

describe("length", () => {
  test("length", () => {
    const result = myLength("dfgdfgdf");
    expect(result).toBe(8);
  });
});
describe("Palindrome", () => {
  test("palindrome", () => {
    const result = palindrome("1221");
    expect(result).toBeTruthy();
  });
  test("palindrome", () => {
    const result = palindrome("1222");
    expect(result).toBeFalsy();
  });
});

describe("sorts an array of numbers in ascending order", () => {
  test("arraySeries", () => {
    const array = [1, 3, 2, 4];
    const result = arraySeries(array);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});

describe("arraySeries", () => {
  test("arraySeries", () => {
    const result = sqrt(4);
    expect(result).toBe(2);
  });
  test("arraySeries", () => {
    const result = sqrt(-4);
    expect(result).toBeNaN();
  });
});

describe("Write a 'sumArray' function that returns many more numbers", () => {
  test("sumArray", () => {
    const array = [1, 3, 2, 4];
    const result = sumArray(array);
    expect(result).toEqual(10);
  });
  test("bigFrom", () => {
    const array = [1, 3, 2, 4];
    const result = sumArray(array);
    expect(result).toBeGreaterThan(9);
  });
  test("array contains a certain number", () => {
    const array = [1, 3, 2, 4];
    expect(array).toContain(2);
  });
});

describe("Gets a user ID and returns information about the user", () => {
  test("fetchUserData", async () => {
    let user = await fetchUserData(1);
    let obj = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    expect(user).toEqual(obj);
  });
  test("fetchNoResponse", async () => {
    let user = await fetchUserData(50);
    expect(user).toThrow;
  });
});

describe("Gets an array of numbers and returns the next value in the Fibonacci sequence", () => {
  test("getNextFibonacciValue", () => {
    const fibonacciSequence = [0, 1, 1, 2, 3, 5, 8];
    const nextFibonacciValue = getNextFibonacciValue(fibonacciSequence);
    expect(nextFibonacciValue).toBe(13);
  });
  test("IsItFibonacci", () => {
    const nonFibonacciSequence = [1, 2, 4, 7, 11];
    expect(() => getNextFibonacciValue(nonFibonacciSequence)).toThrowError(
      "The input array no Fibonacci."
    );
  });
});
