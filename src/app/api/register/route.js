export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    const backendResponse = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await backendResponse.json();

    if (!backendResponse.ok) {
      return Response.json(data, { status: backendResponse.status });
    }

    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error("Register API error:", error);
    return Response.json(
      { error: "Failed to register user", errorMessage: error.message },
      { status: 500 }
    );
  }
}
