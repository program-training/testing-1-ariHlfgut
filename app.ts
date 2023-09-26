import { as } from "vitest/dist/reporters-5f784f42";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export function myLength(str: string): number {
  return str.length;
}

export function palindrome(str: string): boolean {
  const result = str.split("").reverse().join("");
  return str === result;
}

export function arraySeries(arrayNumber: number[]) {
  const result = arrayNumber.sort();
  return result;
}

export function sqrt(arrayNumber: number) {
  const result = Math.sqrt(arrayNumber);
  return result;
}

export function sumArray(arrayNumber: number[]) {
  let sum = 0;
  arrayNumber.forEach((element) => {
    sum += element;
  });
  return sum;
}

export async function fetchUserData(Id: number) {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${Id}`);
    let user: User = await res.json();
    if (!user.address) {
      throw new Error("fetch no response");
    }
    return user;
  } catch (Error) {
    console.log(Error);
  }
}

export function getNextFibonacciValue(numbers: number[]): number {
  if (numbers.length < 2) {
    throw new Error("The input array must contain at least two numbers.");
  }
  const lastIndex = numbers.length - 1;
  const secondToLastIndex = lastIndex - 1;
  const nextValue = numbers[lastIndex] + numbers[secondToLastIndex];

  return nextValue;
}
