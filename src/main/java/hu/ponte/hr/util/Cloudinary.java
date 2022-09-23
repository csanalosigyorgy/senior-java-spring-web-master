package hu.ponte.hr.util;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Cloudinary {

    CLOUD_NAME("cloud_name"),
    API_KEY("api_key"),
    API_SECRET("api_secret"),
    FOLDER("folder"),
    ACCESS_MODE("access_mode"),
    ACCESS_TYPE("access_type"),
    OVERWRITE("overwrite"),
    TYPE("type"),
    RESOURCE_TYPE("resource_type"),
    USE_FILENAME("use_filename");

    private final String value;
}
