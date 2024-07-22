import { readFile } from "@/utils/readFile";

export default function fileHandler(filePath) {
  try {
    const data = readFile(filePath);

    return data;
  } catch (error) {
    return error;
  }
}
