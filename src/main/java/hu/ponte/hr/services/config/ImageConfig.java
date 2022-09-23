package hu.ponte.hr.services.config;

import hu.ponte.hr.services.CloudinaryService;
import hu.ponte.hr.services.ImageUploadService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class ImageConfig {

    private final CloudinaryService cloudinaryService;

    @Bean
    public ImageUploadService imageUploadService() {
        return cloudinaryService;
    }
}
