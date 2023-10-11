type Countries = {
  country_name: string;
  country_short_name: string;
  country_phone_code: number;
};

export async function getCountries(): Promise<Countries[]> {
  const token = process.env.NEXT_PUBLIC_COUNTRIES_API_TOKEN;
  const url = "https://www.universal-tutorial.com/api";

  const accessResponse = await fetch(`${url}/getaccesstoken`, {
    headers: {
      Accept: "application/json",
      "api-token": `${token}`,
      "user-email": "xasanof17@gmail.com",
    },
  });
  if (!accessResponse.ok) {
    console.log("Failed to get access token");
  }

  const response = await fetch(`${url}/countries`, {
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw console.log("Failed to fetch countries data");
  }

  const data = await response.json();
  return data;
}
