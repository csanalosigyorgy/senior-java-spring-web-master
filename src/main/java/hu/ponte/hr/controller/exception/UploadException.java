package hu.ponte.hr.controller.exception;

public class UploadException extends RuntimeException {

    public UploadException() {
        super("exception.image.upload");
    }
}
