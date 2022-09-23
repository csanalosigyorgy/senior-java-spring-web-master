package hu.ponte.hr.domain.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class UploadResponse {

    @JsonAlias("public_id")
    private String publicId;

    @JsonAlias("created_at")
    private String createdAt;

    private Long bytes;

    @JsonAlias("secure_url")
    private String secureUrl;

    private Long width;

    private Long height;

    @JsonAlias("original_filename")
    private String originalFilename;
}
