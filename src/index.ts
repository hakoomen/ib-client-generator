import { bkiExtractor } from "~/extractor";
import { parse } from "~/parser";

export async function app() {
  const url = "http://10.0.85.104:9096/swagger/v1/swagger.json";
  console.clear();
  console.log(
    await parse({
      source: url,
      extractor: bkiExtractor,
      options: {
        endPoint: "/api/AccountType/List",
      },
    }),
  );
}

app();
