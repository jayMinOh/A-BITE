package com.abite.backend.auth.security;

import com.abite.backend.exception.message.ErrorMessage;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Value;
import java.util.Date;
import java.security.Key;
import java.util.List;

@Component
public class JwtTokenProvider {
    @Value("${jwt.secret}")
    private String SECRET_KEY;

    @Value("${jwt.access-token-validity}")
    private long ACCESS_TOKEN_VALIDITY;

    @Value("${jwt.refresh-token-validity}")
    private long REFRESH_TOKEN_VALIDITY;


    private Key getSigningKey() {
        byte[] keyBytes = SECRET_KEY.getBytes();
        return Keys.hmacShaKeyFor(keyBytes);
    }


    // Access Token 생성
    public String generateAccessToken(String userId, List<String> roles) {
        return Jwts.builder()
                .setSubject(userId)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + ACCESS_TOKEN_VALIDITY))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // Refresh Token 생성
    public String generateRefreshToken(String userId) {
        return Jwts.builder()
                .setSubject(userId)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + REFRESH_TOKEN_VALIDITY))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // 토큰 검증
    public boolean validateToken(String token) throws RuntimeException {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(getSigningKey())
                    .build()
                    .parseClaimsJws(token);
            return true;
        }  catch (ExpiredJwtException e) {
            throw new ExpiredJwtException(e.getHeader(), e.getClaims(), ErrorMessage.EXPIRED_JWT_TOKEN.getMessage());
        } catch (SignatureException e) {
            throw new RuntimeException(ErrorMessage.INVALID_SIGNATURE_TOKEN.getMessage());
        }  catch (Exception e) {
            throw new RuntimeException(ErrorMessage.INVALID_JWT_TOKEN.getMessage());
        }
    }
    // 토큰에서 사용자 이름 추출
    public String getUserIdFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public long getRefreshTokenValidity(){
        return REFRESH_TOKEN_VALIDITY;
    }
}
