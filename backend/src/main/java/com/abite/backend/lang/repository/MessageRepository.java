package com.abite.backend.lang.repository;

import com.abite.backend.lang.entity.MultiLanguage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<MultiLanguage, Long> {  // PK를 Long으로 변경
    List<MultiLanguage> findByMultiLangIdAndLangType(String multiLangId, String langType);
    List<MultiLanguage> findByLanguageType(String langType);
}
