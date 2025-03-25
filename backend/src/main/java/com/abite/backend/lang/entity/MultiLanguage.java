package com.abite.backend.lang.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "T_LANGUAGES")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MultiLanguage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "LANGUAGE_ID", updatable = false, nullable = false)
    private Long languageId; // 자동 증가하는 PK

    @Column(name = "MULTI_LANG_ID", nullable = false, length = 30)
    private String multiLangId; // 다국어 ID

    @Column(name = "LANG_TYPE", nullable = false, length = 20)
    private String langType; // 언어 (예: KO, EN)

    @Column(name = "LANGUAGE_TYPE", nullable = false, length = 20)
    private String languageType; // LABEL, ALERT, TEMPLATE 구분

    @Column(name = "MULTI_LANG_USAGE_CD", nullable = false, length = 20)
    private String multiLangUsageCode; // 다국어 용도 코드

    @Column(name = "MULTI_LANG_TXT", nullable = false, length = 4000)
    private String multiLangText; // 다국어 TEXT

    @Column(name = "CREATED_AT", nullable = false, columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdAt; // 생성 시각

    @Column(name = "UPDATED_AT", nullable = false, columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    private LocalDateTime updatedAt; // 수정 시각

    @Column(name = "DELETED_AT", columnDefinition = "DATETIME DEFAULT NULL")
    private LocalDateTime deletedAt; // 논리 삭제
}
