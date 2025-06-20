export function ConvertDataToArray<T extends string | number>(
  data: string,
  type: string
): T[] {
  if (type === "string") {
    return data
      .split(",")
      .map((item: string) => item.trim())
      .filter((item: string) => item !== "") as T[];
  } else {
    return data
      .split(",")
      .map((item: string) => item.trim())
      .filter((item: string) => item !== "")
      .map((item: string) => Number(item))
      .filter((item: number) => !isNaN(item)) as T[];
  }
}
