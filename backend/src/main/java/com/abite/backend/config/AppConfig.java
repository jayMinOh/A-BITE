package com.abite.backend.config;

import com.abite.backend.lang.entity.MultiLanguage;
import com.abite.backend.lang.service.MessageService;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.List;

@Configuration
@EnableTransactionManagement
public class AppConfig {
    // 다국어 처리나 공통 설정 추가
    private final MessageService messageService;

    private final RedisTemplate<String, Object> redisTemplate;

    private static final Logger logger = LoggerFactory.getLogger(AppConfig.class);


    public AppConfig(MessageService messageService, RedisTemplate<String, Object> redisTemplate) {
        this.messageService = messageService;
        this.redisTemplate = redisTemplate;
    }

    @PostConstruct
    public void initialize() {
        // DB에서 데이터를 불러와서 Redis에 저장
        List<MultiLanguage> messages = messageService.getMessagesByLanguageType("LABEL");
        logger.info("Success Redis Multi lang Search: {}", messages.size());
        // Redis 다국어 저장 시, 건별 추가는 속도의 문제로 인해 일괄 처리 하도록 수정
//        redisTemplate.executePipelined((RedisConnection connection) -> {
//            messages.forEach(message -> {
//                String redisKey = getRedisKey(message.getMultiLangId(), message.getLangType());
//
//                String redisValue = message.getMultiLangText();
//
//                // Redis에 데이터 저장
//                connection.stringCommands().set(
//                        redisKey.getBytes(),
//                        redisValue.getBytes()
//                );
//            });
//
//            logger.info("Save Multi lang Redis total Count: {}", messages.size());
//
//            return null;
//        });
    }

    private static String getRedisKey(String multiLangId, String langTYpe) {
        return String.format("MULTI_LANG:%s:%s", multiLangId, langTYpe);
    }
}