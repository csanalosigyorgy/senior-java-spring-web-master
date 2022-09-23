package hu.ponte.hr.services;

import hu.ponte.hr.domain.dto.UploadResponse;
import org.springframework.web.multipart.MultipartFile;

public interface ImageUploadService {

    UploadResponse uploadImage(MultipartFile file);
}
