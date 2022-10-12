import { Low, JSONFile } from "lowdb";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

interface Database {
  questions: []
}

let db: any;

const teste = dirname(fileURLToPath(import.meta.url));

export async function createConnection() {
  // Use JSON file for storage
  const file = join(teste, "../db.json");
  const adapter = new JSONFile<Database>(file);
  db = new Low(adapter);

  // Read data from JSON file, this will set db.data content
  await db.read();

  db.data ||= { questions: [] };
  // Write db.data content to db.json
  await db.write();
}

export const getConnection = () => db;