package com.abite.backend.lang.service;

import com.abite.backend.lang.entity.MultiLanguage;
import com.abite.backend.lang.repository.MessageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    private final MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public List<MultiLanguage> getAllMessages() {
        return messageRepository.findAll();
    }

    public List<MultiLanguage> getMessagesByLanguageType(String langType) {
        return messageRepository.findByLanguageType(langType);
    }

}
