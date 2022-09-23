package hu.ponte.hr.services;

import com.cloudinary.Cloudinary;
import com.fasterxml.jackson.databind.ObjectMapper;
import hu.ponte.hr.controller.exception.SizeLimitExceededException;
import hu.ponte.hr.controller.exception.UploadException;
import hu.ponte.hr.domain.dto.UploadResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import static hu.ponte.hr.util.Cloudinary.*;

@Service
@RequiredArgsConstructor
public class CloudinaryService implements ImageUploadService {

    @Value("${cloudinary.max_size}")
    private Long maxSize;

    @Value("${cloudinary.folder}")
    private String folder;

    @Value("${cloudinary.access_mode}")
    private String accessMode;

    @Value("${cloudinary.access_type}")
    private String accessType;

    @Value("${cloudinary.overwrite}")
    private boolean overwrite;

    @Value("${cloudinary.type}")
    private String type;

    @Value("${cloudinary.resource_type}")
    private String resourceType;

    @Value("${cloudinary.use_filename}")
    private boolean useFilename;

    private final Cloudinary cloudinary;

    @Override
    public UploadResponse uploadImage(MultipartFile image) {
        if(image.getSize() > maxSize) {
            throw new SizeLimitExceededException();
        }

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
            throw new UploadException();
        }
    }

    private Map<String, Object> getUploadConfig() {
        Map<String, Object> config = new HashMap<>();
        config.put(FOLDER.getValue(), folder);
        config.put(ACCESS_MODE.getValue(), accessMode);
        config.put(ACCESS_TYPE.getValue(), accessType);
        config.put(OVERWRITE.getValue(), overwrite);
        config.put(TYPE.getValue(), type);
        config.put(RESOURCE_TYPE.getValue(), resourceType);
        config.put(USE_FILENAME.getValue(), useFilename);
        return config;
    }

}
