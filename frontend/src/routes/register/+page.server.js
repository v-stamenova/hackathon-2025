import axios from "axios";
import { redirect } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";

/**
 * Executes during the load of the svelte page
 * @param {*} param0 
 */
export const load = async ({ cookies }) => {
  let isUserAuth = false;

  try {
    // Get the cookie containing the JWT token
    const jwt = cookies.get("jwt");

    // // Send request to the apigateway to check if the user is authenticated
    const isAuthenticated = await axios.get("http://gateway:3011/verify", {
      headers: {
        "Authorization": `Bearer ${jwt}`
      }
    });

    if (isAuthenticated.data.message == "User is authenticated") {
      isUserAuth = true;
    }
  } catch (error) {
    console.log(error);
  }

  // If they are authenticated they should not be able to access the register
  // Svelte issue with throwing redirect within a try-catch block workaround
  if (isUserAuth) {
    throw redirect(302, "/home");
  }
};

export const actions = {
  /**
   * Handles the user request for registration
   * @param {*} param0 
   * @returns 
   */
  register: async ({ cookies, request }) => {
    const formData = await request.formData();

    const name = formData.get("name");
    const password = formData.get("password");
    const email = formData.get("email");
    console.log(name)

    try {
      // Send request to the apigateway to register new user
      const data = await axios.post("http://gateway:3011/register", {
        name: name,
        password: password,
        email: email,
      }, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded" // The header is important!
        }
      });

      // Sets new cookie that contains the JWT token of the user
      cookies.set("jwt", data.data.data.token, {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        secure: true, // should be true in production (HTTPS)
        sameSite: "lax"
      });

    } catch (err) {
      // In case there is a user with this email already, return back to the form
      if (err.response.data.data.details == "SQLITE_CONSTRAINT: UNIQUE constraint failed: users.email") {
        errors = [{ "input": "email", "message": "This email is already in use" }];
        return fail(400, { email, name, errors });
      }
    }

    throw redirect(302, "/home");
  }
};

/**
 * Validates the user registration data
 * @param {*} formData the form that contains the data
 * @returns array of errors caused by validation fails
 */
async function validateRegistrationData(formData) {
  const email = formData.get("email");
  const name = formData.get("name");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");

  const validationIssues = [];

  if (!email) {
    validationIssues.push({ "input": "email", "message": "The email is missing" });
  } else {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.get("email"))) {
      validationIssues.push({ "input": "email", "message": "The email that has been provided is invalid" });
    }
  }

  if (!name) {
    validationIssues.push({ "input": "name", "message": "The name is missing" });
  }

  if (!(password && confirmPassword)) {
    validationIssues.push({ "input": "password", "message": "The passwords are missing" });
  } else if (password != confirmPassword) {
    validationIssues.push({ "input": "password", "message": "The password are not matching" });
  } else if (password.length < 8) {
    validationIssues.push({ "input": "password", "message": "The password needs to be at least 8 characters long" });
    validationIssues.push({ "input": "confirm-password", "message": "" });
  }

  return validationIssues;
}