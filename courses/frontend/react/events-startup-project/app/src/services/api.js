const API_BASE_URL = "http://localhost:3001";

export default function api(route) {
  return `${API_BASE_URL}/api${route}`;
}
