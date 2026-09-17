export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const response = await fetch("https://xuedingtoken1.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": req.headers.authorization
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
