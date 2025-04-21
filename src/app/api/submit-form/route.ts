import { NextResponse } from 'next/server';

const API_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RlLmJhY2tlbmQuc2FsZXNyZW5kZXIuY29tLyIsImF1ZCI6IkNQQSIsImp0aSI6IjhmYzM3Mzc2NWI5OTdmYmJjOTY1YmJjMjE4Njc2YjQ2IiwidHlwZSI6IndlYm1hc3Rlcl9hcGkiLCJjaWQiOiI3MDYiLCJyZWYiOnsiYWxpYXMiOiJ3ZWJtYXN0ZXIiLCJpZCI6IjEyIn19.zoESYUVR45B4gJD-LsfjoRM3LZNfbRcbg6tz6QR5i3g";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Создаем URL с параметрами
    const url = new URL("https://706-1.de.backend.salesrender.com/api/webmaster/v2/addOrder.html");
    
    // Добавляем обязательные параметры в URL
    url.searchParams.append('webmasterID', '12');
    url.searchParams.append('token', API_TOKEN);
    
    // Форматируем телефон
    const formattedPhone = data.phone.replace(/[^\d+]/g, '');
    
    // Добавляем остальные параметры
    const formData = new URLSearchParams({
      fio: data.fio,
      phone: formattedPhone,
      country: data.country,
      
    });

    console.log("URL запроса:", url.toString());
    console.log("Отправляемые данные:", formData.toString());

    const res = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      },
      body: formData.toString()
    });

    const text = await res.text();
    console.log("Ответ от API:", text);

    if (!res.ok) {
      console.error("Ошибка API:", text);
      return NextResponse.json(
        { error: "Ошибка при отправке заказа", details: text },
        { status: res.status }
      );
    }

    // Пробуем распарсить ответ как JSON
    let jsonResponse;
    try {
      jsonResponse = JSON.parse(text);
    } catch (e) {
      jsonResponse = { rawResponse: text };
    }

    return NextResponse.json({ 
      success: true, 
      details: jsonResponse 
    });

  } catch (err) {
    console.error("Ошибка сервера:", err);
    return NextResponse.json(
      { 
        error: "Внутренняя ошибка сервера",
        details: err instanceof Error ? err.message : String(err)
      },
      { status: 500 }
    );
  }
}