import * as paths from "./paths";
import { AuthenticationDto } from "../dto/types";

export async function authentication(data: AuthenticationDto): Promise<boolean> {
  const response = await fetch(paths.routes.AUTHENTICATION_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.ok;
}
