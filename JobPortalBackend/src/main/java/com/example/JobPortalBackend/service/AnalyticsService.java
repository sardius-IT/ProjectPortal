package com.example.JobPortalBackend.service;

import com.example.JobPortalBackend.analytics.AnalyticsDataCollector;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class AnalyticsService {

    private final AnalyticsDataCollector dataCollector;

    public AnalyticsService(@Lazy AnalyticsDataCollector dataCollector) {
        this.dataCollector = dataCollector;
    }

    public Map<String, Object> getAnalytics() {
        return dataCollector.collectAnalytics();
    }
}


