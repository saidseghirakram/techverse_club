export function getFirstLetters(name: string) {
    return name
      .split(" ")
      .map((word: string) => word[0])
      .join("");
}