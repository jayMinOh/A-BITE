package com.abite.backend.auth.service;

import com.abite.backend.auth.dto.LoginRequest;
import com.abite.backend.auth.dto.RefreshRequest;
import com.abite.backend.auth.entity.AuthUser;
import com.abite.backend.auth.repository.AuthUserRepository;
import com.abite.backend.auth.dto.AuthResponse;
import com.abite.backend.auth.security.JwtTokenProvider;
import com.abite.backend.exception.InvalidTokenException;
import com.abite.backend.exception.message.ErrorMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseCookie;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthUserService {

    private final AuthUserRepository authUserRepository;
    private final PasswordEncoder encoder;
    private final JwtTokenProvider jwtTokenProvider;
    @Autowired
    public AuthUserService(AuthUserRepository authUserRepository, PasswordEncoder encoder , JwtTokenProvider jwtTokenProvider) {
        this.authUserRepository = authUserRepository;
        this.encoder = encoder;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    // 모든 사용자 조회
    public List<AuthUser> findAll() {
        return authUserRepository.findAll();
    }

    // 특정 사용자 조회 (복합 키 사용)
    public Optional<AuthUser> findByLoginId(String userId) {
        return authUserRepository.findByLoginId(userId);
    }
    // 사용자 저장 또는 업데이트
    public AuthUser save(AuthUser authUser) {
        return authUserRepository.save(authUser);
    }

    // 사용자 삭제
    public void deleteById(String userId) {
        authUserRepository.deleteAuthUserByLoginId(userId);
    }

    public AuthResponse login(LoginRequest request) throws Exception {
        Optional<AuthUser> user = this.findByLoginId(request.getUserId());
        if (user.isEmpty() || !encoder.matches(request.getPassword(), user.get().getPassword())) {
            throw new InvalidTokenException(ErrorMessage.INVALID_CREDENTIALS.getMessage());
        }

        String accessToken = jwtTokenProvider.generateAccessToken(request.getUserId(), null);
        String refreshToken = jwtTokenProvider.generateRefreshToken(request.getUserId());

        // 쿠키 생성
        ResponseCookie refreshTokenCookie = createRefreshTokenCookie(refreshToken, jwtTokenProvider);

        return new AuthResponse(accessToken, refreshToken, refreshTokenCookie, user.get().getMemberNo(), user.get().getLoginId(), user.get().getLangType());
    }
    public AuthResponse refresh(String refreshToken) throws Exception {
        if (!jwtTokenProvider.validateToken(refreshToken)) {
            throw new InvalidTokenException(ErrorMessage.INVALID_REFRESH_TOKEN.getMessage());
        }

        String username = jwtTokenProvider.getUserIdFromToken(refreshToken);
        String newAccessToken = jwtTokenProvider.generateAccessToken(username, null);
        // access token 만료 시, 신규 refresh, access 발급
        String newRefreshToken = jwtTokenProvider.generateRefreshToken(username);
        ResponseCookie refreshTokenCookie = createRefreshTokenCookie(newRefreshToken, jwtTokenProvider);

        return new AuthResponse(newAccessToken, refreshToken, refreshTokenCookie);
    }


    public ResponseCookie createRefreshTokenCookie(String refreshToken, JwtTokenProvider tokenProvider) {
        // Refresh Token 쿠키 생성
        return ResponseCookie.from("refreshToken", refreshToken)
                .httpOnly(true) // HTTP-Only 쿠키로 설정 (JS에서 접근 불가)
                .secure(true)   // HTTPS에서만 사용 (로컬 개발 시 false로 설정)
                .path("/")
                .maxAge(tokenProvider.getRefreshTokenValidity()/1000)
                .build();
    }
}
