package com.abite.backend.auth.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "T_MEMBERS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AuthUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_NO", updatable = false, nullable = false)
    private Long memberNo;

    @Column(name = "LOGIN_ID", nullable = false, unique = true, length = 255)
    private String loginId;

    @Column(name = "PASSWORD", nullable = false, length = 255)
    private String password;

    @Column(name = "LANG_TYPE", nullable = false, length = 2)
    private String langType;

    @Column(name = "USER_TYPE", nullable = false, length = 5)
    private String user_type;

    @Column(name = "NAME", nullable = false, length = 100)
    private String name;

    @Column(name = "ADDRESS", nullable = false, length = 500)
    private String address;

    @Column(name = "LATITUDE", nullable = false, precision = 10, scale = 8)
    private BigDecimal latitude;

    @Column(name = "LONGITUDE", nullable = false, precision = 11, scale = 8)
    private BigDecimal longitude;

    @Column(name = "CREATED_AT", nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "UPDATED_AT")
    private LocalDateTime updatedAt = LocalDateTime.now();

    @Column(name = "DELETED_AT")
    private LocalDateTime deletedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
