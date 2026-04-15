import { RAPID_API_KEY, RAPID_API_HOST } from "./secret.js";

//static on top of all
//static do not use private variables

//default parameters  above constructor
// graduate = fault;
//new + this is done

//ERROR HANDLING

class AppError extends Error {
  constructor(message, code = 500) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
  }

  toUserMessage() {
    return this.message;
  }
}

class ValidationError extends AppError {
  constructor(message, code = 400) {
    super(message, code);
  }
}

class SaveError extends AppError {
  constructor(message, code = 400) {
    super(message, code);
  }
}

class ApiError extends AppError {
  constructor(message, code = 500) {
    super(message, code);
  }
}

class NetworkError extends AppError {
  constructor(message = "No internet connection. Please try again.", code = 0) {
    super(message, code);
  }
}

class UrlValidator {
  static validate(url) {
    let userUrl = url.trim();

    // Validate that the input is not empty
    if (!userUrl) {
      throw new ValidationError("Please enter a website URL");
    }

    // Validate that the input starts with http:// or https://
    if (!userUrl.startsWith("http://") && !userUrl.startsWith("https://")) {
      userUrl = "https://" + userUrl;
    }

    try {
      new URL(userUrl);
    } catch {
      throw new ValidationError("Please enter a valid URL");
    }
    return userUrl;
  }
}

class SaveURL {
  static validate(savedUrl, currentScreenshot) {
    const trimmedUrl = savedUrl.trim();

    // Validate that the input is not empty
    if (!currentScreenshot) {
      throw new SaveError(
        "No screenshot to save. Please capture a screenshot first.",
        400,
      );
    }

    if (!trimmedUrl) {
      throw new SaveError("Please enter an URL to save the screenshot.", 400);
    }

    try {
      new URL(trimmedUrl);
    } catch {
      throw new SaveError("Please enter a valid URL.", 400);
    }

    return trimmedUrl;
  }
}

class ApiResponseHandler {
  static async validate(response) {
    if (!response.ok) {
      const errorBody = await response.text();
      console.error("API error:", errorBody);
      throw new ApiError(
        "Could not generate screenshot. Please try again.",
        response.status,
      );
    }

    return response;
  }
}

