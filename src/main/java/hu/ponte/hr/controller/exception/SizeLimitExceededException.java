package hu.ponte.hr.controller.exception;

public class SizeLimitExceededException extends RuntimeException {

    public SizeLimitExceededException() {
        super("exception.image.size");
    }
}
