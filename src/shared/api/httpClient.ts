export interface ApiRequestConfig {
  endpoint: string;
  method?: "GET" | "POST" | "PATCH" | "DELETE";
}

export const httpClient = async <TResponse>({
  endpoint,
  method = "GET"
}: ApiRequestConfig): Promise<TResponse> => {
  const response = await fetch(endpoint, { method });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return (await response.json()) as TResponse;
};
