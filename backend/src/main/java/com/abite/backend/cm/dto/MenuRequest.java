package com.abite.backend.cm.dto;

import lombok.Data;

@Data
public class MenuRequest {
    private String langType;
    private String userId;
    private Long memberNo;
}
