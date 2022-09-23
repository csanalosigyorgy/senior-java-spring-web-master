package hu.ponte.hr.services;

import com.cloudinary.Cloudinary;
import com.fasterxml.jackson.databind.ObjectMapper;
import hu.ponte.hr.controller.exception.CloudinaryUploadException;
import hu.ponte.hr.domain.dto.UploadResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class CloudinaryService implements ImageUploadService {

    private final Cloudinary cloudinary;

    @Override
    public UploadResponse uploadImage(MultipartFile image) {
        Map<String, Object> uploadConfig = getUploadConfig();
        File file = Path.of(Objects.requireNonNull(image.getOriginalFilename())).toFile();
        try {
            image.transferTo(file);
            UploadResponse result = new ObjectMapper()
                    .convertValue(cloudinary.uploader().upload(file, uploadConfig), UploadResponse.class);
            if (!file.delete()) {
                throw new IOException();
            }
            return result;
        } catch (IOException | RuntimeException e) {
            throw new CloudinaryUploadException();
        }
    }

    private Map<String, Object> getUploadConfig() {
        Map<String, Object> config = new HashMap<>();
        config.put("folder", "ponte_hr");
        config.put("access_mode", "authenticated");
        config.put("access_type", "token");
        config.put("overwrite", false);
        config.put("type", "authenticated");
        config.put("resource_type", "auto");
        config.put("use_filename", true);
        return config;
    }

}
