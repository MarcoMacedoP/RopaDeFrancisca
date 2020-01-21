const BASE_URL = "http://localhost:8000/api";
import "isomorphic-fetch";

interface fetchOptions {
  method: "POST" | "GET" | "DELETE" | "PUT";
  body?: any;
}

export async function callApi(url: string, options?: fetchOptions) {
  const optionsFinal = {
    ...options,
    body: options?.body && JSON.stringify(options.body),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(`${BASE_URL}${url}`, optionsFinal);
  return response.json();
}
