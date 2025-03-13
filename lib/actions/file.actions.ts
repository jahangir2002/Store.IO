"use server";

import { createAdminClient } from "../appwrite";
import { InputFile } from "node-appwrite/file";

const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};

export const uploadFile = async ({
  file,
  ownerId,
  accountId,
  path,
}: UploadFileProps) => {
  const { storage, databases } = await createAdminClient();

  try {
    const inputFile = InputFile.fromBuffer(file, file.name);
  } catch (error) {
    handleError(error, "Failed to Upload file");
  }
};
