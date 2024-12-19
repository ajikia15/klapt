import axios from "axios";
import { LaptopT } from "../types/LaptopT";

const API_URL = "http://localhost:3000/laptops";

export async function fetchLaptops(): Promise<LaptopT[]> {
  try {
    const response = await axios.get<LaptopT[]>(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch laptops");
  }
}

export async function addLaptop(
  title: string,
  price: number
): Promise<LaptopT> {
  try {
    const response = await axios.post<LaptopT>(
      API_URL,
      { title, price },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to add laptop");
  }
}

export async function findLaptopsByTerm(term: string): Promise<LaptopT[]> {
  try {
    const response = await axios.get<LaptopT[]>(
      `${API_URL}/search?term=${term}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching laptops by term:", error);
    throw error;
  }
}
