package hu.ponte.hr.services;

import hu.ponte.hr.ImageRepository;
import hu.ponte.hr.domain.Image;
import hu.ponte.hr.domain.dto.UploadResponse;
import hu.ponte.hr.services.mapper.ImageMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
@RequiredArgsConstructor
public class ImageStore {

    private final ImageUploadService imageUploadService;
    private final ImageMapper imageMapper;
    private final ImageRepository imageRepository;

    public void save(MultipartFile file) {
        UploadResponse uploadedImage = imageUploadService.uploadImage(file);
        Image image = imageMapper.toEntity(file, uploadedImage);
        imageRepository.save(image);
    }
}
