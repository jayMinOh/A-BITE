package com.abite.backend.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {

    // 기본 데이터 소스 (MariaDB)
    @Primary
    @Bean(name = "dataSource")
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSource dataSource() {
        return DataSourceBuilder.create().build();
    }

//    // 추가 데이터 소스 (SQL Server)
//    @Bean(name = "douzoneDataSource")
//    @ConfigurationProperties(prefix = "spring.datasource.douzone")
//    public DataSource douzoneDataSource() {
//        return DataSourceBuilder.create().build();
//    }

    // 기본 트랜잭션 매니저
    @Primary
    @Bean(name = "transactionManager")
    public DataSourceTransactionManager transactionManager(
            @Qualifier("dataSource") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    // Douzone 트랜잭션 매니저
//    @Bean(name = "douzoneTransactionManager")
//    public DataSourceTransactionManager douzoneTransactionManager(
//            @Qualifier("douzoneDataSource") DataSource dataSource) {
//        return new DataSourceTransactionManager(dataSource);
//    }
}
