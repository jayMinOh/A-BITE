package com.abite.backend.auth.controller;

import com.abite.backend.auth.dto.AuthResponse;
import com.abite.backend.auth.dto.LoginRequest;
import com.abite.backend.auth.dto.RefreshRequest;
import com.abite.backend.auth.service.AuthUserService;
import com.abite.backend.exception.message.ErrorMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    private AuthUserService service;

    @Autowired
    public AuthController(AuthUserService service){
        this.service = service;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) throws Exception {
        AuthResponse response = null;
        try {
            response = service.login(request);
        }catch (RuntimeException e){
            e.printStackTrace();
            return ResponseEntity.status(401).body(ErrorMessage.INVALID_CREDENTIALS);
        }

        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, response.getCookie().toString()).body(response);
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refresh(@CookieValue(value = "refreshToken", required = true) String refreshToken ) throws Exception{
        AuthResponse response = null;
        try{
            response = service.refresh(refreshToken);
        }catch (RuntimeException e){
            logger.error(e.getMessage());
            return ResponseEntity.status(401).body("Invalid refresh token");
        }
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, response.getCookie().toString()) // 새 쿠키 설정
                .body(response);
    }

}
