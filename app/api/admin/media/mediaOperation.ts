import { s3 } from "@/lib/aws";

type FileCommonProps = { folderName: string };
type FileAddVariantProps = { type: "add"; fileType: "image"; buffer: Buffer; extension: string; fileName: string; };
type FileDeleteVariantProps = { type: "delete"; fileName: string; };
type FileDeleteManyVariantProps = { type: "delete-many"; fileNames: string[]; };
type FileProps = FileCommonProps & (FileAddVariantProps | FileDeleteVariantProps | FileDeleteManyVariantProps);
type FolderProps = { type: "add" | "delete"; folderName: string; };

const CLOUDFRONT_URL = process.env.AWS_CLOUDFRONT_URL || "";

const addFile = async ({ folderName, fileType, fileName, buffer, extension }: { folderName: string; fileType: "image"; fileName: string; buffer: Buffer; extension: string; }): Promise<string> => {
  try {
    await s3.file.add({ directoryName: folderName, fileType, fileName, buffer, extension });
    return `${CLOUDFRONT_URL}/${folderName}/${fileName}`;
  } catch (error: any) {
    console.error(error.message);
    return "";
  }
};

const deleteFile = async ({ folderName, fileName }: { folderName: string; fileName: string; }): Promise<boolean> => {
  try {
    await s3.file.delete({ directoryName: folderName, fileName });
    return true;
  } catch (error: any) {
    console.error(error.message);
    return false;
  }
};

const deleteFiles = async ({ folderName, fileNames }: { folderName: string; fileNames: string[]; }): Promise<boolean> => {
  try {
    await s3.file.deleteMany({ directoryName: folderName, fileNames });
    return true;
  } catch (error: any) {
    console.error(error.message);
    return false;
  }
};

export const fileOperation = async (props: FileProps): Promise<boolean | string> => {
  const { type, folderName } = props;
  if (type === "add") {
    const { fileName, fileType, buffer, extension } = props;
    return await addFile({ folderName, fileType, fileName, buffer, extension });
  } else if (type === "delete") {
    const { fileName } = props;
    return await deleteFile({ folderName, fileName });
  } else if (type === "delete-many") {
    const { fileNames } = props;
    return await deleteFiles({ folderName, fileNames });
  } else {
    return false;
  }
};

const addFolder = async ({ folderName }: { folderName: string; }): Promise<boolean> => {
  try {
    await s3.directory.add({ directoryName: folderName });
    return true;
  } catch (error: any) {
    console.log("Error adding folder to s3:", error.message);
    return false;
  }
};

const deleteFolder = async ({ folderName }: { folderName: string; }): Promise<boolean> => {
  try {
    await s3.directory.delete({ directoryName: folderName });
    return true;
  } catch (error: any) {
    console.log("Error deleting folder at s3:", error.message);
    return false;
  }
};

export const folderOperation = async (props: FolderProps): Promise<boolean> => {
  const { type, folderName } = props;
  if (type === "add") return await addFolder({ folderName });
  else if (type === "delete") return await deleteFolder({ folderName });
  else return false;
};

const mediaOperation = {
  file: fileOperation,
  folder: folderOperation
};

export default mediaOperation;
