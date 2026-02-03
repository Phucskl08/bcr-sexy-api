export default async function handler(req, res) {
  try {
    const r = await fetch("https://bcrapj.vercel.app/sexy/all", {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const data = await r.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "API ERROR", detail: e.toString() });
  }
}
