export  async function GET() {
    return new Response(JSON.stringify({ success: true, data: "pong" }), {  
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
  
}

export async function POST(req) {
    console.log(req)
    return new Response(JSON.stringify({ success: true, data: "pong" }), {  
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
  
}