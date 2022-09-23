package hu.ponte.hr.services.config;

import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

import static hu.ponte.hr.util.Cloudinary.*;

@Configuration
public class CloudinaryConfig {

    @Value("${cloudinary.cloud_name}")
    private String cloudName;

    @Value("${cloudinary.api_key}")
    private String apiKey;

    @Value("${cloudinary.api_secret}")
    private String apiSecret;

    @Bean
    public Cloudinary cloudinary() {
        Map<String, String> config = getConfig();
        return new Cloudinary(config);
    }

    private Map<String, String> getConfig() {
        Map<String, String> config = new HashMap<>();
        config.put(CLOUD_NAME.getValue(), cloudName);
        config.put(API_KEY.getValue(), apiKey);
        config.put(API_SECRET.getValue(), apiSecret);
        return config;
    }
}
