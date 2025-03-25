package com.abite.backend.exception.message;

import org.springframework.http.HttpStatus;
import org.springframework.web.client.HttpClientErrorException;

public enum ErrorMessage {
    INVALID_CREDENTIALS("Invalid credentials", HttpStatus.UNAUTHORIZED),
    INVALID_REFRESH_TOKEN("Invalid refresh token", HttpStatus.UNAUTHORIZED),
    INVALID_JWT_TOKEN("Invalid JWT token", HttpStatus.UNAUTHORIZED),
    INVALID_SIGNATURE_TOKEN("Invalid Signature",  HttpStatus.UNAUTHORIZED),
    EXPIRED_JWT_TOKEN("Expired JWT token", HttpStatus.UNAUTHORIZED),
    UNSUPPORTED_JWT_TOKEN("Unsupported JWT token", HttpStatus.UNAUTHORIZED),
    JWT_SIGNATURE_ERROR("JWT signature validation failed", HttpStatus.UNAUTHORIZED);


    private final String message;
    private final HttpStatus status;

    // 생성자
    ErrorMessage(String message, HttpStatus status) {
        this.message = message;
        this.status = status;
    }
    // Getter
    public String getMessage() {
        return "http status: " + status + ", Message: " + message;
    }
}
