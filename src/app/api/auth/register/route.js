import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Todos os campos sao obrigatorios." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "A senha deve ter no minimo 6 caracteres." },
        { status: 400 }
      );
    }

    const user = {
      id: "usr_" + Math.random().toString(36).substr(2, 9),
      name,
      email,
      plan: "Free",
      avatar: name.substring(0, 2).toUpperCase(),
    };

    return NextResponse.json({
      success: true,
      message: "Conta criada com sucesso.",
      user,
      token: "mock_jwt_token_adsearcher_" + Date.now(),
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro no servidor ao criar conta." },
      { status: 500 }
    );
  }
}
