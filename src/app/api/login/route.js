export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const backendResponse = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await backendResponse.json();

    if (!backendResponse.ok) {
      return Response.json(data, { status: backendResponse.status });
    }

    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error("Login API error:", error);
    return Response.json(
      { error: "Failed to login user", errorMessage: error.message },
      { status: 500 }
    );
  }
}
