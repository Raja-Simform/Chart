export function ConvertDataToArray(
  data: string,
  type: string
): Array<string | number> {
  if (type === "string") {
    return data
      .split(",")
      .map((item: string) => item.trim())
      .filter((item: string) => item !== "");
  } else {
    return data
      .split(",")
      .map((item: string) => item.trim())
      .filter((item: string) => item !== "")
      .map((item: string) => Number(item))
      .filter((item: number) => !isNaN(item));
  }
}
