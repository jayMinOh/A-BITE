package com.abite.backend.cm.controller;

import com.abite.backend.cm.dto.MenuDTO;
import com.abite.backend.cm.dto.MenuRequest;
import com.abite.backend.cm.service.MenuService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MenuController {
    private final MenuService menuService;

    private static final Logger logger = LoggerFactory.getLogger(MenuController.class);

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @PostMapping("/api/menus")
    public List<MenuDTO> getAllMenus(@RequestBody MenuRequest request) {
        return menuService.getAllMenus(request.getLangType(), request.getMemberNo());
    }
}
