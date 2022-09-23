package hu.ponte.hr.controller.exception;

public class CloudinaryUploadException extends RuntimeException {

    public CloudinaryUploadException() {
        super("exception.image.upload");
    }
}
