import { Injectable } from '@nestjs/common';
import { UploadFileService } from '../services/uploadFile.service';

@Injectable()
export class UploadFileUseCase {
  constructor(private readonly uploadFileService: UploadFileService) {}

  async uploadFile(file: Express.Multer.File) {
    const fileData = await this.uploadFileService.uploadFile(file);

    const response = {
      url: fileData.Location,
      fileName: fileData.Key,
    };

    return response;
  }

  async deleteFile(url: string) {
    await this.uploadFileService.deleteFile(url);
  }
}
