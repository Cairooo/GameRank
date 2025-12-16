import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import axios from "axios";
import pg from "pg";

dotenv.config();
const app = express();
const port = 3000;

let igdbToken = null;
let igdbTokenExpiresAt = null;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "gamerank",
  password: "5432",
  port: 5433,
});

db.connect();

async function getIGDBToken() {
  if (igdbToken && igdbTokenExpiresAt > Date.now()) {
    return igdbToken;
  }

  const response = await axios.post("https://id.twitch.tv/oauth2/token", null, {
    params: {
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: "client_credentials",
    },
  });

  igdbToken = response.data.access_token;
  igdbTokenExpiresAt = Date.now() + response.data.expires_in * 1000;

  return igdbToken;
}

async function searchGame(gameName) {
  const token = await getIGDBToken();

  const response = await axios.post(
    "https://api.igdb.com/v4/games/",
    `search "${gameName}"; fields cover.url; limit 6;`,
    {
      headers: {
        "Client-ID": process.env.TWITCH_CLIENT_ID,
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );

  return response.data;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/ranking", async (req, res) => {
  try {
    const resultS = await db.query(
      "SELECT url, id FROM gamerank WHERE rank = 'S'"
    );
    const resultA = await db.query(
      "SELECT url, id FROM gamerank WHERE rank = 'A'"
    );
    const resultB = await db.query(
      "SELECT url, id FROM gamerank WHERE rank = 'B'"
    );
    const resultC = await db.query(
      "SELECT url, id FROM gamerank WHERE rank = 'C'"
    );
    res.render("ranking.ejs", {
      dataS: resultS.rows,
      dataA: resultA.rows,
      dataB: resultB.rows,
      dataC: resultC.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const result = await db.query("SELECT * FROM gamerank WHERE id = $1", [id]);

    res.render("edit.ejs", { dataRank: result.rows[0] });
  } catch (err) {
    console.log(err);
  }
});

app.post("/rankGame", async (req, res) => {
  try {
    const gameName = req.body.gameName;
    const result = await searchGame(gameName);
    const data = result[1];
    const finalData = data.cover.url;
    const rank = req.body.rank;
    const insert = await db.query(
      "INSERT INTO gamerank (url, rank) VALUES ($1, $2)",
      [finalData, rank]
    );
    res.redirect("/ranking");
  } catch (err) {
    console.log(err);
  }
});

app.post("/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { gameName, rank } = req.body;

    const result = await searchGame(gameName);
    const data = result[1];
    const finalData = data.cover.url;

    const insert = await db.query(
      "UPDATE gamerank SET url = $1, rank = $2 WHERE id = $3",
      [finalData, rank, id]
    );

    res.redirect("/ranking");
  } catch (err) {
    console.log(err);
  }
});

app.post("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await db.query("DELETE FROM gamerank WHERE id = $1", [id]);

    res.redirect("/ranking");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on ${port}.`);
});
