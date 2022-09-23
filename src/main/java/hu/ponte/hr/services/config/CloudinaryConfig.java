package hu.ponte.hr.services.config;

import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class CloudinaryConfig {

    @Value("${keys.cloudinary.cloud_name}")
    private String cloudName;

    @Value("${keys.cloudinary.api_key}")
    private String apiKey;

    @Value("${keys.cloudinary.api_secret}")
    private String apiSecret;

    @Bean
    public Cloudinary cloudinary() {
        Map<String, String> config = getConfig();
        return new Cloudinary(config);
    }

    private Map<String, String> getConfig() {
        Map<String, String> config = new HashMap<>();
        config.put("cloud_name", cloudName);
        config.put("api_key", apiKey);
        config.put("api_secret", apiSecret);
        return config;
    }
}
