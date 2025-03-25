package com.abite.backend.cm.mapper;

import com.abite.backend.cm.dto.MenuDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MenuMapper {
    List<MenuDTO> selectAllMenuList(String langType, Long memberNo);
}
