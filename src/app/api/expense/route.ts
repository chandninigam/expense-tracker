import connectMongoDb from "@/lib/db";

export async function GET() {
  const client = await connectMongoDb();
  const collection = client.connection.db?.collection("user_expenses");
  const allExpenses = await collection?.find().toArray();
  //   console.log(client.connection.db?.databaseName, "DEBUG", allExpenses);
  return Response.json({ message: "heey i am still here", allExpenses });
}
