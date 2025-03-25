package com.abite.backend.auth.controller;

import com.abite.backend.auth.entity.AuthUser;
import com.abite.backend.auth.service.AuthUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final AuthUserService authUserService;

    @Autowired
    public UserController(AuthUserService authUserService) { this.authUserService = authUserService; };

    // 모든 사용자 조회
    @GetMapping
    public ResponseEntity<List<AuthUser>> findAll() {
        return ResponseEntity.ok(authUserService.findAll());
    }

    // 특정 사용자 조회
    @GetMapping("/{userId}")
    public ResponseEntity<AuthUser> findById(@PathVariable String userId) {
        Optional<AuthUser> authUser = authUserService.findByLoginId(userId);
        return authUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // 사용자 저장 또는 업데이트
    @PostMapping
    public ResponseEntity<AuthUser> save(@RequestBody AuthUser authUser) {
        AuthUser savedUser = authUserService.save(authUser);
        return ResponseEntity.ok(savedUser);
    }

    // 사용자 삭제
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteById(@PathVariable String userId) {
        authUserService.deleteById(userId);
        return ResponseEntity.noContent().build();
    }
}
