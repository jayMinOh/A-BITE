package com.abite.backend.auth.repository;

import com.abite.backend.auth.entity.AuthUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthUserRepository extends JpaRepository<AuthUser, Long> {
    // 필요에 따라 커스텀 쿼리 메서드를 추가할 수 있습니다.
    Optional<AuthUser> findByLoginId(String loginId);

    void deleteAuthUserByLoginId(String loginId);
}
