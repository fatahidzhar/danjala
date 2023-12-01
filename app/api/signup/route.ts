import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const { first_name, last_name, email, password } = await req.json();

    const a = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first_name, last_name, email, password }),
    });

    return NextResponse.json({ status: 200, message: "success" });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
}
