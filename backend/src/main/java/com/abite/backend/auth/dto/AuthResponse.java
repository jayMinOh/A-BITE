package com.abite.backend.auth.dto;

import lombok.Data;
import org.springframework.http.ResponseCookie;

@Data
public class AuthResponse {
    private String accessToken;
    private String refreshToken;
    private ResponseCookie cookie;
    private Long memberNo;
    private String loginId;
    private String langType;

    public AuthResponse(String accessToken, String refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

    public AuthResponse(String accessToken, String refreshToken, ResponseCookie responseCookie) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.cookie = responseCookie;
    }

    public AuthResponse(String accessToken, String refreshToken, ResponseCookie responseCookie, Long memberNo, String loginId, String langType) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.cookie = responseCookie;
        this.memberNo = memberNo;
        this.loginId= loginId;
        this.langType = langType;
    }

}
