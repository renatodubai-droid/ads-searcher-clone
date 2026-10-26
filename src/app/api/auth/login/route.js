import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "E-mail e senha sao obrigatorios." },
        { status: 400 }
      );
    }

    // Mock authentication
    const user = {
      id: "usr_102938",
      name: email.split("@")[0],
      email: email,
      plan: "Pro",
      avatar: email.substring(0, 2).toUpperCase(),
    };

    return NextResponse.json({
      success: true,
      message: "Login realizado com sucesso.",
      user,
      token: "mock_jwt_token_adsearcher_" + Date.now(),
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro no servidor ao processar login." },
      { status: 500 }
    );
  }
}
