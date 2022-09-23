package hu.ponte.hr.services.mapper;

import hu.ponte.hr.controller.ImageMeta;
import hu.ponte.hr.domain.Image;
import hu.ponte.hr.domain.dto.UploadResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

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

    public List<ImageMeta> toMetas(List<Image> images) {
        return images.stream()
                .map(this::toMate)
                .collect(Collectors.toList());
    }

    private ImageMeta toMate(Image image) {
        return ImageMeta.builder()
                .id(image.getId().toString())
                .name(image.getName())
                .size(image.getSize())
                .mimeType(image.getMimeType())
                .build();
    }
}
