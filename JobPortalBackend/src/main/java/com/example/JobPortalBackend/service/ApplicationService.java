package com.example.JobPortalBackend.service;

import com.example.JobPortalBackend.model.Application;
import com.example.JobPortalBackend.repository.ApplicationRepository;
import com.example.JobPortalBackend.websocket.AnalyticsPublisher;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.TextStyle;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@Service
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final AnalyticsPublisher analyticsPublisher;
    private final AnalyticsService analyticsService;

    public ApplicationService(ApplicationRepository applicationRepository,
                              AnalyticsPublisher analyticsPublisher,
                              AnalyticsService analyticsService) {
        this.applicationRepository = applicationRepository;
        this.analyticsPublisher = analyticsPublisher;
        this.analyticsService = analyticsService;
    }

    public Application addApplication(Application application) {
        Application saved = applicationRepository.save(application);

        // After saving new application, publish updated analytics
        Map<String, Object> analyticsData = analyticsService.getAnalytics();
        analyticsPublisher.publishAnalytics(); // ✅


        return saved;
    }

    // Add this method to get daily application stats for the last 7 days
  public List<Map<String, Object>> getDailyApplicationStats() {
    List<Map<String, Object>> dailyStats = new ArrayList<>();

    LocalDate today = LocalDate.now();
    LocalDate startDate = today.minusDays(6);  // last 7 days

    // ✅ Convert LocalDate to LocalDateTime
    LocalDateTime startDateTime = startDate.atStartOfDay();
    LocalDateTime endDateTime = today.atTime(23, 59, 59);

    List<Object[]> results = applicationRepository.countApplicationsBetweenDates(startDateTime, endDateTime);

    Map<LocalDate, Long> dateCountMap = new HashMap<>();
    for (Object[] row : results) {
        LocalDate date = ((java.sql.Date) row[0]).toLocalDate(); // ✅ Ensure cast works
        Long count = (Long) row[1];
        dateCountMap.put(date, count);
    }

    for (int i = 6; i >= 0; i--) {
        LocalDate date = today.minusDays(i);
        String dayName = date.getDayOfWeek().getDisplayName(TextStyle.SHORT, Locale.ENGLISH);

        long applicationCount = dateCountMap.getOrDefault(date, 0L);

        Map<String, Object> dayData = new HashMap<>();
        dayData.put("day", dayName);
        dayData.put("applications", applicationCount);

        dailyStats.add(dayData);
    }

    return dailyStats;
}


}
