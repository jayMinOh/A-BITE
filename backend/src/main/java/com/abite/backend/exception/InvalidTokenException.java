package com.abite.backend.exception;

public class InvalidTokenException extends RuntimeException {
    public InvalidTokenException(String message) {
        super(message); // 메시지를 부모 RuntimeException에 전달
    }
}
