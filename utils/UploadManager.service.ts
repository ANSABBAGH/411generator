import { PutObjectCommand, PutObjectCommandOutput, S3Client } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";
const REGION = "us-east-1";

export class UploadManagerService {
  private client: S3Client;
  private publicPath: string = path.join(__dirname, "../public/companies");
  constructor() {
    this.client = new S3Client({
      region: REGION,
      credentials: {
        // TODO: type env vars
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
      }
    });
  }

  public async uploadFolder() {
    await Promise.all(this.recursiveUpload(this.publicPath));
  }

  // Sorry for recursive code
  private recursiveUpload(fileOrFolderpath: string): Array<Promise<PutObjectCommandOutput>> {
    const promises = [];
    if (fs.lstatSync(fileOrFolderpath).isFile()) {
      promises.push(this.uploadFile(fileOrFolderpath));
    } else {
      const files = fs.readdirSync(fileOrFolderpath);
      for (const file of files) {
        const fullPath = path.join(fileOrFolderpath, file);
        promises.push(...this.recursiveUpload(fullPath));
      }
    }
    return promises;
  }

  // TODO: optimize this with async upload
  private uploadFile(filepath: string) {
    const contentType = {
      html: "text/html",
      png: "image/png",
      jpg: "image/jpg"
    };
    
    return this.client.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME as string,
        Key: filepath.replace(this.publicPath + "/", ""),
        Body: fs.readFileSync(filepath),
        ContentType:
          Object.entries(contentType).find(([key, value]) => filepath.endsWith(key))?.[1] ||
          "text/plain"
      })
    );
  }
}
