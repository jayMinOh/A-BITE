package com.abite.backend.auth.security;

import com.abite.backend.exception.message.ErrorMessage;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenProvider jwtTokenProvider;

    public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        String requestURI = request.getRequestURI();
        if (requestURI.startsWith("/api/auth/login") || requestURI.startsWith("/api/auth/refresh")) {
            chain.doFilter(request, response);
            return;
        }

        String authHeader = request.getHeader("Authorization");

        // Authorization 헤더 확인
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            // Bearer 토큰이 없거나 형식이 잘못된 경우
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write(ErrorMessage.INVALID_JWT_TOKEN.getMessage());
            return;
        }

        String token = authHeader.substring(7); // "Bearer " 이후의 토큰만 추출

        try {
            // 토큰 검증
             if (jwtTokenProvider.validateToken(token)) {
                // 유효한 토큰에서 사용자 정보 추출
                String userId = jwtTokenProvider.getUserIdFromToken(token);
                // @TODO 인증 추가 해야함
                List<SimpleGrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
                // 인증 객체 생성 및 설정
                UsernamePasswordAuthenticationToken authentication =
                        new UsernamePasswordAuthenticationToken(userId, null, null);

                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (ExpiredJwtException e) {
            // 만료된 토큰 처리
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write(ErrorMessage.EXPIRED_JWT_TOKEN.getMessage());
            return;
        } catch (RuntimeException e) {
            // 기타 토큰 오류 처리
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write(e.getMessage());
            return;
        }

        // 필터 체인을 계속 실행
        chain.doFilter(request, response);
    }
}