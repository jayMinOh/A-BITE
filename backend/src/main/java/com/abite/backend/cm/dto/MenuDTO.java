package com.abite.backend.cm.dto;

import lombok.Data;
import java.util.List;

@Data
public class MenuDTO {
    private Long menuId;          // 메뉴 ID
    private Long parentMenuId;     // 부모 메뉴 ID (NULL이면 최상위)
    private String multiLangId;    // 다국어 ID (메뉴명 번역용)
    private String menuName;           // 메뉴 이름 (프론트에서 변환)
    private String menuType;       // 메뉴 유형 (CATEGORY, PAGE, FUNCTION)
    private int menuOrder;         // 정렬 순서
    private String linkUrl;        // 메뉴 이동 URL
    private boolean visibleBuyer;  // 구매자에게 보이는지 여부
    private boolean visibleSeller; // 판매자에게 보이는지 여부
    private boolean isMobile;      // 모바일 지원 여부
    private boolean isFavorite;      // 즐겨찾기 여부
    private int depth;                  //최대 3 depth
    private Long hierarchyOrder;

    private List<MenuDTO> items;   // 하위 메뉴 리스트
}
