package hu.ponte.hr.services;

import hu.ponte.hr.ImageRepository;
import hu.ponte.hr.controller.ImageMeta;
import hu.ponte.hr.domain.Image;
import hu.ponte.hr.domain.dto.UploadResponse;
import hu.ponte.hr.services.mapper.ImageMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ImageStore {

    private final ImageUploadService imageUploadService;
    private final ImageMapper imageMapper;
    private final ImageRepository imageRepository;

    public List<ImageMeta> getAll() {
        List<Image> images = imageRepository.findAll();
        return imageMapper.toMetas(images);
    }

    public void save(MultipartFile file) {
        UploadResponse uploadedImage = imageUploadService.uploadImage(file);
        Image image = imageMapper.toEntity(file, uploadedImage);
        imageRepository.save(image);
    }
}
