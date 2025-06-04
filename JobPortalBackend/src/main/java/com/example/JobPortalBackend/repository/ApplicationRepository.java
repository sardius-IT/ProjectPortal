package com.example.JobPortalBackend.repository;

import com.example.JobPortalBackend.model.Application;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ApplicationRepository extends JpaRepository<Application, Long> {

   @Query("SELECT FUNCTION('DATE', a.createdAt) as date, COUNT(a) as count " +
       "FROM Application a " +
       "WHERE a.createdAt BETWEEN :startDate AND :endDate " +
       "GROUP BY FUNCTION('DATE', a.createdAt)")
List<Object[]> countApplicationsBetweenDates(@Param("startDate") LocalDateTime startDate,
                                             @Param("endDate") LocalDateTime endDate);
}
