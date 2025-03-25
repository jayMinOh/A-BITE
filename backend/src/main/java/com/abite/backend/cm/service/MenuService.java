package com.abite.backend.cm.service;

import com.abite.backend.cm.dto.MenuDTO;
import com.abite.backend.cm.mapper.MenuMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class MenuService {
    private final MenuMapper menuMapper;

    @Autowired
    public MenuService(MenuMapper menuMapper) {
        this.menuMapper = menuMapper;
    }

    public List<MenuDTO> getAllMenus(String langType, Long memberNo) {
        List<MenuDTO> menuEntities = menuMapper.selectAllMenuList(langType, memberNo);
        return makeHierarchy(menuEntities);
    }

    private List<MenuDTO> makeHierarchy(List<MenuDTO> menus) {
        Map<Long, MenuDTO> menuMap = menus.stream()
                .collect(Collectors.toMap(MenuDTO::getMenuId, menu -> menu));

        List<MenuDTO> rootMenus = new ArrayList<>();

        for (MenuDTO menu : menuMap.values()) {
            if (menu.getParentMenuId() == null) {
                rootMenus.add(menu);
            } else {
                MenuDTO parent = menuMap.get(menu.getParentMenuId());
                if (parent != null) {
                    if (parent.getItems() == null) {
                        parent.setItems(new ArrayList<>());
                    }
                    parent.getItems().add(menu);
                }
            }
        }
        return rootMenus;
    }
}
