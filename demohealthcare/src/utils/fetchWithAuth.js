export const fetchWithAuth = async (url, options = {}) => {
  // 1. Get the current access token
  let token = localStorage.getItem("access_token");

  // 2. Set up headers, making sure to include the Authorization header if we have a token
  const headers = {
    ...options.headers,
    "Content-Type": options.headers?.["Content-Type"] || "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // 3. Make the initial request
  let response = await fetch(url, { ...options, headers });

  // 4. If the response is 401 Unauthorized, the access token has likely expired
  if (response.status === 401) {
    console.log("Access token expired, attempting to refresh...");

    const refreshToken = localStorage.getItem("refresh_token");

    if (refreshToken) {
      try {
        // 5. Call your backend refresh endpoint to get a new access token
        // IMPORTANT: Update this URL string if your backend endpoint is named differently (e.g., /refresh-token)
        const refreshResponse = await fetch(`${import.meta.env.VITE_API_URL}/refresh`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Send refresh token in the body as expected by FastAPI backend
          body: JSON.stringify({ refresh_token: refreshToken })
        });

        if (refreshResponse.ok) {
          const data = await refreshResponse.json();

          // 6. Save the new tokens to localStorage
          localStorage.setItem("access_token", data.access_token);
          // Only update refresh token if the backend sends a new one
          if (data.refresh_token) {
             localStorage.setItem("refresh_token", data.refresh_token);
          }

          // 7. Retry the original request with the new access token
          headers.Authorization = `Bearer ${data.access_token}`;
          response = await fetch(url, { ...options, headers });
        } else {
          // If refresh failed (e.g., refresh token expired), clear storage and redirect to login
          console.error("Refresh token invalid or expired.");
          logoutUser();
        }
      } catch (err) {
        console.error("Error refreshing token:", err);
        logoutUser();
      }
    } else {
      // No refresh token available, force logout
      logoutUser();
    }
  }

  return response;
};

// Helper function to handle forceful logouts on auth failure
function logoutUser() {
  localStorage.removeItem("healthcare_user_id");
  localStorage.removeItem("healthcare_user_email");
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  
  // Navigate to login page
  window.location.href = "/Login";
}
