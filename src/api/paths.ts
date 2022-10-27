import env from "../env";

const api = {
  healthTracker: `${env.REACT_APP_GATEWAY_BASE_URL}/api/v1/health-tracker`,
};

export const routes = {
  HOME_SCREEN_URL: "/",
  AUTHENTICATION_URL: `${api.healthTracker}/authentication`,
  AUTHORIZATION_URL: `${api.healthTracker}/authorization`,
};
