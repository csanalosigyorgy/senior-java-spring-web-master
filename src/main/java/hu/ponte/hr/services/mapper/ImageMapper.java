package hu.ponte.hr.services.mapper;

import hu.ponte.hr.domain.Image;
import hu.ponte.hr.domain.dto.UploadResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class ImageMapper {

    public Image toEntity(MultipartFile file, UploadResponse uploadedImage) {
        return Image.builder()
                .url(uploadedImage.getSecureUrl())
                .name(file.getOriginalFilename())
                .mimeType(file.getContentType())
                .size(file.getSize())
                .build();
    }
}
