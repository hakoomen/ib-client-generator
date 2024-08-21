import { bkiGenerator } from "~/generators";
import { parse } from "~/parser";

export async function app() {
  const url = "http://10.0.85.104:9096/swagger/v1/swagger.json";
  console.clear();
  console.log(
    await parse({
      source: url,
      generator: bkiGenerator.default,
      options: {
        endPoint: "/api/AccountType/List",
      },
    }),
  );
}

app();
